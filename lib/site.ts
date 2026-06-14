import type { DownloadItem } from "@/lib/download"

const defaultDownloadUrls = {
  linux: "https://downloads.faberpdf.com/linux/FaberPDF_0.1.0_amd64.AppImage",
  macos: "https://downloads.faberpdf.com/macos/FaberPDF.app.tar.gz",
  windows:
    "https://downloads.faberpdf.com/windows/FaberPDF_0.1.0_x64-setup.exe",
} satisfies Record<DownloadItem["platform"], string>

function downloadUrl(value: string | undefined, fallback: string) {
  return value?.trim() || fallback
}

export const siteConfig = {
  name: "FaberPDF",
  betaVersion: "0.1.0",
  ownerName: "Adnan Crnovršanin",
  contactEmail: "hello@faberpdf.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://faberpdf.com",
  description:
    "A local desktop PDF editor for signing documents, annotating pages, validating PDFs, and making focused text edits offline.",
  keywords: [
    "FaberPDF",
    "desktop PDF editor",
    "offline PDF editor",
    "PDF signing",
    "PDF annotation",
    "edit PDF text",
    "local PDF editor",
  ],
}

export const downloadItems = [
  {
    href: downloadUrl(
      process.env.NEXT_PUBLIC_FABERPDF_WINDOWS_URL,
      defaultDownloadUrls.windows
    ),
    platform: "windows",
  },
  {
    href: downloadUrl(
      process.env.NEXT_PUBLIC_FABERPDF_MACOS_URL,
      defaultDownloadUrls.macos
    ),
    platform: "macos",
  },
  {
    href: downloadUrl(
      process.env.NEXT_PUBLIC_FABERPDF_LINUX_URL,
      defaultDownloadUrls.linux
    ),
    platform: "linux",
  },
] satisfies DownloadItem[]
