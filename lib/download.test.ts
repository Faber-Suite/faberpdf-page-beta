import { describe, expect, it } from "vitest"

import {
  detectDownloadPlatform,
  getDownloadOptions,
  getDownloadButtonModel,
  getDownloadState,
  getRecommendedDownload,
  type DownloadButtonCopy,
  type DownloadItem,
} from "@/lib/download"

const downloads: DownloadItem[] = [
  {
    href: "https://example.com/faberpdf.exe",
    platform: "windows",
    options: [
      { href: "https://example.com/faberpdf.exe", label: "Windows setup" },
      { href: "https://example.com/faberpdf.msi", label: "Windows MSI" },
    ],
  },
  {
    href: "",
    platform: "macos",
    options: [
      {
        href: "https://example.com/faberpdf-aarch64.dmg",
        label: "Apple Silicon",
      },
      { href: "https://example.com/faberpdf-x64.dmg", label: "Intel Mac" },
    ],
  },
  {
    href: "https://example.com/faberpdf.AppImage",
    platform: "linux",
    options: [
      { href: "https://example.com/faberpdf.AppImage", label: "AppImage" },
      { href: "https://example.com/faberpdf.deb", label: "Debian/Ubuntu" },
      { href: "https://example.com/faberpdf.rpm", label: "Fedora/RHEL" },
    ],
  },
]

describe("detectDownloadPlatform", () => {
  it("detects the main desktop operating systems", () => {
    expect(detectDownloadPlatform({ platform: "Win32" })).toBe("windows")
    expect(detectDownloadPlatform({ platform: "MacIntel" })).toBe("macos")
    expect(detectDownloadPlatform({ platform: "Linux x86_64" })).toBe("linux")
  })

  it("prefers User-Agent Client Hints platform when available", () => {
    expect(
      detectDownloadPlatform({
        platform: "Linux x86_64",
        userAgentDataPlatform: "macOS",
      })
    ).toBe("macos")
  })

  it("keeps mobile operating systems out of desktop installer detection", () => {
    expect(
      detectDownloadPlatform({
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15",
      })
    ).toBe("mobile")
    expect(
      detectDownloadPlatform({
        userAgent:
          "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36",
      })
    ).toBe("mobile")
  })
})

describe("getRecommendedDownload", () => {
  it("returns the configured download for the detected platform", () => {
    expect(getRecommendedDownload(downloads, "linux")).toEqual(downloads[2])
  })

  it("does not recommend a missing or unknown platform URL", () => {
    expect(
      getRecommendedDownload([{ href: "", platform: "windows" }], "windows")
    ).toBeNull()
    expect(getRecommendedDownload(downloads, "unknown")).toBeNull()
  })
})

describe("getDownloadOptions", () => {
  it("returns every configured installer option for a desktop platform", () => {
    expect(getDownloadOptions(downloads, "windows")).toEqual(
      downloads[0].options
    )
  })

  it("does not return desktop installer options for mobile or unknown visitors", () => {
    expect(getDownloadOptions(downloads, "mobile")).toEqual([])
    expect(getDownloadOptions(downloads, "unknown")).toEqual([])
  })
})

describe("getDownloadState", () => {
  it("marks mobile devices as unsupported instead of offering a download action", async () => {
    const downloadModule =
      (await import("@/lib/download")) as typeof import("@/lib/download") & {
        getDownloadState?: (
          items: DownloadItem[],
          platform: "windows" | "macos" | "linux" | "mobile" | "unknown"
        ) => { status: string }
      }

    expect(downloadModule.getDownloadState).toBeTypeOf("function")
    expect(downloadModule.getDownloadState?.(downloads, "mobile")).toEqual({
      status: "unsupported",
    })
  })

  it("requires a manual macOS installer choice when architecture is not safe to infer", () => {
    expect(getDownloadState(downloads, "macos")).toEqual({
      download: downloads[1],
      status: "choices",
    })
  })
})

describe("getDownloadButtonModel", () => {
  const copy: DownloadButtonCopy = {
    button: "Download for {platform}",
    chooseButton: "Choose {platform} installer",
    unsupportedButton: "Your OS is not supported",
  }

  it("labels available desktop downloads with the visitor operating system", () => {
    expect(
      getDownloadButtonModel(downloads, "windows", "Windows", copy)
    ).toMatchObject({
      disabled: false,
      href: "https://example.com/faberpdf.exe",
      label: "Download for Windows",
    })
  })

  it("keeps pending desktop buttons OS-specific while disabling the action", () => {
    expect(
      getDownloadButtonModel(
        [{ href: "", platform: "windows" }],
        "windows",
        "Windows",
        copy
      )
    ).toMatchObject({
      disabled: true,
      href: null,
      label: "Download for Windows",
    })
  })

  it("asks macOS visitors to choose an installer instead of guessing CPU architecture", () => {
    expect(
      getDownloadButtonModel(downloads, "macos", "macOS", copy)
    ).toMatchObject({
      disabled: false,
      href: null,
      label: "Choose macOS installer",
      status: "choices",
    })
  })

  it("labels unsupported visitor operating systems with a disabled unsupported button", () => {
    expect(
      getDownloadButtonModel(downloads, "mobile", "mobile device", copy)
    ).toMatchObject({
      disabled: true,
      href: null,
      label: "Your OS is not supported",
    })
    expect(
      getDownloadButtonModel(downloads, "unknown", "your desktop", copy)
    ).toMatchObject({
      disabled: true,
      href: null,
      label: "Your OS is not supported",
    })
  })
})
