import type { DownloadItem } from "@/lib/download"

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
    href: process.env.NEXT_PUBLIC_FABERPDF_WINDOWS_URL ?? "",
    platform: "windows",
  },
  {
    href: process.env.NEXT_PUBLIC_FABERPDF_MACOS_URL ?? "",
    platform: "macos",
  },
  {
    href: process.env.NEXT_PUBLIC_FABERPDF_LINUX_URL ?? "",
    platform: "linux",
  },
] satisfies DownloadItem[]

export const downloadEnvironmentKeys = {
  linux: "NEXT_PUBLIC_FABERPDF_LINUX_URL",
  macos: "NEXT_PUBLIC_FABERPDF_MACOS_URL",
  windows: "NEXT_PUBLIC_FABERPDF_WINDOWS_URL",
} satisfies Record<DownloadItem["platform"], string>
