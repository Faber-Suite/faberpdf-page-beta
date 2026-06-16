import type { DownloadItem } from "@/lib/download"

const downloadsManifestUrl =
  process.env.FABERPDF_DOWNLOADS_MANIFEST_URL ??
  "https://downloads.faberpdf.com/downloads.json"
const downloadsManifestRevalidateSeconds = 15 * 60
const trustedDownloadHost = "downloads.faberpdf.com"
const desktopPlatforms = ["windows", "macos", "linux"] as const

const defaultDownloadUrls = {
  linuxAppImage:
    "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
  linuxDeb: "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.deb",
  linuxRpm: "https://downloads.faberpdf.com/linux/FaberPDF-0.1.0-1.x86_64.rpm",
  macosAppleSilicon:
    "https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_aarch64.dmg",
  macosArchive: "https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz",
  macosIntel: "https://downloads.faberpdf.com/macos/FaberPDF_0.1.0_x64.dmg",
  windowsMsi:
    "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64_en-US.msi",
  windowsSetup:
    "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe",
}

function downloadUrl(value: string | undefined, fallback: string) {
  return value?.trim() || fallback
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function isDesktopPlatform(
  value: unknown
): value is (typeof desktopPlatforms)[number] {
  return (
    typeof value === "string" &&
    desktopPlatforms.includes(value as (typeof desktopPlatforms)[number])
  )
}

function isTrustedDownloadUrl(value: string) {
  try {
    const url = new URL(value)

    return url.protocol === "https:" && url.hostname === trustedDownloadHost
  } catch {
    return false
  }
}

function parseDownloadOption(value: unknown) {
  if (!isRecord(value)) {
    return null
  }

  const { href, label } = value

  if (
    typeof href !== "string" ||
    !isTrustedDownloadUrl(href) ||
    typeof label !== "string" ||
    !label.trim()
  ) {
    return null
  }

  return { href, label }
}

function parseDownloadItem(value: unknown): DownloadItem | null {
  if (!isRecord(value) || !isDesktopPlatform(value.platform)) {
    return null
  }

  if (typeof value.href !== "string") {
    return null
  }

  if (value.href.trim() && !isTrustedDownloadUrl(value.href)) {
    return null
  }

  if (!Array.isArray(value.options) || value.options.length === 0) {
    return null
  }

  const options = value.options.map(parseDownloadOption)

  if (options.some((option) => option === null)) {
    return null
  }

  return {
    href: value.href,
    options: options as NonNullable<DownloadItem["options"]>,
    platform: value.platform,
  }
}

function parseDownloadsManifest(value: unknown) {
  if (!isRecord(value) || typeof value.version !== "string") {
    return null
  }

  if (!Array.isArray(value.downloads)) {
    return null
  }

  const parsedDownloads = value.downloads.map(parseDownloadItem)

  if (parsedDownloads.some((item) => item === null)) {
    return null
  }

  const byPlatform = new Map(
    (parsedDownloads as DownloadItem[]).map((item) => [item.platform, item])
  )

  if (byPlatform.size !== parsedDownloads.length) {
    return null
  }

  const downloadItems = desktopPlatforms.map((platform) =>
    byPlatform.get(platform)
  )

  if (downloadItems.some((item) => item === undefined)) {
    return null
  }

  return {
    downloadItems: downloadItems as DownloadItem[],
    version: value.version,
  }
}

export const siteConfig = {
  name: "FaberPDF",
  betaVersion: "0.1.0",
  ownerName: "Adnan Crnovršanin",
  contactEmail: "office@actaer.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://faberpdf.com",
  description:
    "A modern local-first PDF editor for signing, editing, annotating, and validating documents on your desktop.",
  keywords: [
    "FaberPDF",
    "modern PDF editor",
    "local-first PDF editor",
    "desktop PDF editor",
    "offline PDF editor",
    "PDF signing",
    "qualified electronic certificate PDF signing",
    "PDF annotation",
    "edit PDF text",
    "local PDF editor",
  ],
}

export const downloadItems = [
  {
    href: downloadUrl(
      process.env.NEXT_PUBLIC_FABERPDF_WINDOWS_URL,
      defaultDownloadUrls.windowsSetup
    ),
    options: [
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_WINDOWS_URL,
          defaultDownloadUrls.windowsSetup
        ),
        label: "Windows setup (.exe)",
      },
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_WINDOWS_MSI_URL,
          defaultDownloadUrls.windowsMsi
        ),
        label: "Windows MSI (.msi)",
      },
    ],
    platform: "windows",
  },
  {
    href: "",
    options: [
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_MACOS_APPLE_SILICON_URL,
          defaultDownloadUrls.macosAppleSilicon
        ),
        label: "Apple Silicon Mac (.dmg)",
      },
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_MACOS_INTEL_URL,
          defaultDownloadUrls.macosIntel
        ),
        label: "Intel Mac (.dmg)",
      },
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_MACOS_URL,
          defaultDownloadUrls.macosArchive
        ),
        label: "macOS app archive (.tar.gz)",
      },
    ],
    platform: "macos",
  },
  {
    href: downloadUrl(
      process.env.NEXT_PUBLIC_FABERPDF_LINUX_URL,
      defaultDownloadUrls.linuxAppImage
    ),
    options: [
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_LINUX_URL,
          defaultDownloadUrls.linuxAppImage
        ),
        label: "Linux AppImage",
      },
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_LINUX_DEB_URL,
          defaultDownloadUrls.linuxDeb
        ),
        label: "Debian/Ubuntu (.deb)",
      },
      {
        href: downloadUrl(
          process.env.NEXT_PUBLIC_FABERPDF_LINUX_RPM_URL,
          defaultDownloadUrls.linuxRpm
        ),
        label: "Fedora/RHEL (.rpm)",
      },
    ],
    platform: "linux",
  },
] satisfies DownloadItem[]

export type SiteRelease = {
  downloadItems: DownloadItem[]
  version: string
}

type Fetcher = (
  input: string,
  init?: RequestInit & { next?: { revalidate: number } }
) => Promise<Response>

export async function getSiteRelease({
  fetcher = fetch as Fetcher,
  manifestUrl = downloadsManifestUrl,
}: {
  fetcher?: Fetcher
  manifestUrl?: string
} = {}): Promise<SiteRelease> {
  const fallback = {
    downloadItems,
    version: siteConfig.betaVersion,
  }

  if (!isTrustedDownloadUrl(manifestUrl)) {
    return fallback
  }

  try {
    const response = await fetcher(manifestUrl, {
      next: { revalidate: downloadsManifestRevalidateSeconds },
    })

    if (!response.ok) {
      return fallback
    }

    const release = parseDownloadsManifest(await response.json())

    return release ?? fallback
  } catch {
    return fallback
  }
}
