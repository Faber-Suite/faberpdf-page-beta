import { afterEach, describe, expect, test, vi } from "vitest"

const downloadUrlEnvironmentKeys = [
  "NEXT_PUBLIC_FABERPDF_WINDOWS_URL",
  "NEXT_PUBLIC_FABERPDF_WINDOWS_MSI_URL",
  "NEXT_PUBLIC_FABERPDF_MACOS_URL",
  "NEXT_PUBLIC_FABERPDF_MACOS_APPLE_SILICON_URL",
  "NEXT_PUBLIC_FABERPDF_MACOS_INTEL_URL",
  "NEXT_PUBLIC_FABERPDF_LINUX_URL",
  "NEXT_PUBLIC_FABERPDF_LINUX_DEB_URL",
  "NEXT_PUBLIC_FABERPDF_LINUX_RPM_URL",
] as const

async function importSiteConfigWithCleanDownloadEnvironment() {
  for (const key of downloadUrlEnvironmentKeys) {
    delete process.env[key]
  }

  vi.resetModules()

  return import("@/lib/site")
}

afterEach(() => {
  vi.unstubAllEnvs()
})

describe("site download configuration", () => {
  test("loads the website download manifest as the current site release", async () => {
    const { getSiteRelease } =
      await importSiteConfigWithCleanDownloadEnvironment()

    const release = await getSiteRelease({
      fetcher: async () =>
        new Response(
          JSON.stringify({
            version: "1.2.3",
            notes: "Fixture release",
            pub_date: "2026-06-14T10:00:00Z",
            downloads: [
              {
                href: "https://downloads.faberpdf.com/windows/FaberPDF_1.2.3_x64-setup.exe",
                options: [
                  {
                    href: "https://downloads.faberpdf.com/windows/FaberPDF_1.2.3_x64-setup.exe",
                    label: "Windows setup (.exe)",
                  },
                ],
                platform: "windows",
              },
              {
                href: "",
                options: [
                  {
                    href: "https://downloads.faberpdf.com/macos/aarch64/FaberPDF.app.tar.gz",
                    label: "Apple Silicon Mac app archive (.tar.gz)",
                  },
                ],
                platform: "macos",
              },
              {
                href: "https://downloads.faberpdf.com/linux/FaberPDF_1.2.3_amd64.AppImage",
                options: [
                  {
                    href: "https://downloads.faberpdf.com/linux/FaberPDF_1.2.3_amd64.AppImage",
                    label: "Linux AppImage",
                  },
                ],
                platform: "linux",
              },
            ],
          })
        ),
      manifestUrl: "https://downloads.faberpdf.com/downloads.json",
    })

    expect(release.version).toBe("1.2.3")
    expect(release.downloadItems.map((item) => item.href)).toEqual([
      "https://downloads.faberpdf.com/windows/FaberPDF_1.2.3_x64-setup.exe",
      "",
      "https://downloads.faberpdf.com/linux/FaberPDF_1.2.3_amd64.AppImage",
    ])
  })

  test("falls back to bundled defaults when the website download manifest is unsafe", async () => {
    const { getSiteRelease, siteConfig } =
      await importSiteConfigWithCleanDownloadEnvironment()

    const release = await getSiteRelease({
      fetcher: async () =>
        new Response(
          JSON.stringify({
            version: "1.2.3",
            downloads: [
              {
                href: "https://example.com/FaberPDF.exe",
                options: [
                  {
                    href: "https://example.com/FaberPDF.exe",
                    label: "Windows setup (.exe)",
                  },
                ],
                platform: "windows",
              },
            ],
          })
        ),
      manifestUrl: "https://downloads.faberpdf.com/downloads.json",
    })

    expect(release.version).toBe(siteConfig.betaVersion)
    expect(release.downloadItems[0]?.href).toBe(
      "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe"
    )
  })

  test("ships live default installer URLs for each desktop platform", async () => {
    const { downloadItems } =
      await importSiteConfigWithCleanDownloadEnvironment()

    expect(downloadItems).toEqual([
      {
        href: "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe",
        options: [
          {
            href: "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe",
            label: "Windows setup (.exe)",
          },
          {
            href: "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64_en-US.msi",
            label: "Windows MSI (.msi)",
          },
        ],
        platform: "windows",
      },
      {
        href: "",
        options: [
          {
            href: "https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_aarch64.dmg",
            label: "Apple Silicon Mac (.dmg)",
          },
          {
            href: "https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_x64.dmg",
            label: "Intel Mac (.dmg)",
          },
          {
            href: "https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz",
            label: "macOS app archive (.tar.gz)",
          },
        ],
        platform: "macos",
      },
      {
        href: "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
        options: [
          {
            href: "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
            label: "Linux AppImage",
          },
          {
            href: "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.deb",
            label: "Debian/Ubuntu (.deb)",
          },
          {
            href: "https://downloads.faberpdf.com/linux/FaberPDF-0.1.0-1.x86_64.rpm",
            label: "Fedora/RHEL (.rpm)",
          },
        ],
        platform: "linux",
      },
    ])
  })

  test("covers every generated installer object from download storage", async () => {
    const { downloadItems } =
      await importSiteConfigWithCleanDownloadEnvironment()
    const configuredUrls = downloadItems.flatMap((item) =>
      item.options.map((option) => option.href)
    )

    expect(configuredUrls).toEqual([
      "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe",
      "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64_en-US.msi",
      "https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_aarch64.dmg",
      "https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_x64.dmg",
      "https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz",
      "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
      "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.deb",
      "https://downloads.faberpdf.com/linux/FaberPDF-0.1.0-1.x86_64.rpm",
    ])
  })

  test("falls back to the live defaults when public overrides are blank", async () => {
    vi.stubEnv("NEXT_PUBLIC_FABERPDF_WINDOWS_URL", "")
    vi.stubEnv("NEXT_PUBLIC_FABERPDF_MACOS_URL", "   ")
    vi.stubEnv("NEXT_PUBLIC_FABERPDF_LINUX_URL", "")
    vi.resetModules()

    const { downloadItems } = await import("@/lib/site")

    expect(downloadItems.map((item) => item.href)).toEqual([
      "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe",
      "",
      "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
    ])
  })
})

describe("site release copy", () => {
  test("can render localized dictionary copy with a runtime release version", async () => {
    const { getDictionary } = await import("@/lib/i18n")

    expect(
      getDictionary("en", { version: "1.2.3" }).home.hero.versionBadge
    ).toBe("Version 1.2.3")
    expect(
      getDictionary("sr-Latn", { version: "1.2.3" }).home.hero.versionBadge
    ).toBe("Verzija 1.2.3")
    expect(
      getDictionary("sr-Cyrl", { version: "1.2.3" }).home.hero.versionBadge
    ).toBe("Верзија 1.2.3")
    expect(
      getDictionary("bs", { version: "1.2.3" }).feedback.form.versionPlaceholder
    ).toBe("1.2.3")
  })
})
