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
