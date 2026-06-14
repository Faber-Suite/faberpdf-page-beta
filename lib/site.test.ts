import { afterEach, describe, expect, test, vi } from "vitest"

const downloadUrlEnvironmentKeys = [
  "NEXT_PUBLIC_FABERPDF_WINDOWS_URL",
  "NEXT_PUBLIC_FABERPDF_MACOS_URL",
  "NEXT_PUBLIC_FABERPDF_LINUX_URL",
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
        platform: "windows",
      },
      {
        href: "https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz",
        platform: "macos",
      },
      {
        href: "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
        platform: "linux",
      },
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
      "https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz",
      "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
    ])
  })
})
