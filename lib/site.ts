import type { DownloadItem } from "@/lib/download"

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
