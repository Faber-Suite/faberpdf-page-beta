export type DownloadPlatform =
  | "windows"
  | "macos"
  | "linux"
  | "mobile"
  | "unknown"

export type DesktopDownloadPlatform = Exclude<
  DownloadPlatform,
  "mobile" | "unknown"
>

export type DownloadItem = {
  href: string
  platform: DesktopDownloadPlatform
}

export type DownloadState =
  | { download: DownloadItem; status: "available" }
  | { status: "pending" }
  | { status: "unknown" }
  | { status: "unsupported" }

export type DownloadButtonCopy = {
  button: string
  unsupportedButton: string
}

export type DownloadButtonModel = {
  disabled: boolean
  href: string | null
  label: string
  status: DownloadState["status"]
}

type PlatformDetectionInput = {
  platform?: string
  userAgent?: string
  userAgentDataPlatform?: string
}

function normalize(value: string | undefined) {
  return value?.toLowerCase() ?? ""
}

export function detectDownloadPlatform({
  platform,
  userAgent,
  userAgentDataPlatform,
}: PlatformDetectionInput): DownloadPlatform {
  const hintedPlatform = normalize(userAgentDataPlatform)
  const legacyPlatform = normalize(platform)
  const agent = normalize(userAgent)
  const combined = `${hintedPlatform} ${legacyPlatform} ${agent}`

  if (
    /android|iphone|ipad|ipod|mobile|iemobile|blackberry|bb10|opera mini/.test(
      combined
    )
  ) {
    return "mobile"
  }

  if (/windows|win32|win64|wow64/.test(combined)) {
    return "windows"
  }

  if (/macos|macintosh|macintel|mac intel|darwin/.test(combined)) {
    return "macos"
  }

  if (/linux|x11/.test(combined)) {
    return "linux"
  }

  return "unknown"
}

export function getRecommendedDownload(
  downloads: DownloadItem[],
  platform: DownloadPlatform
) {
  if (platform === "unknown" || platform === "mobile") {
    return null
  }

  const download = downloads.find((item) => item.platform === platform)

  return download?.href ? download : null
}

export function getDownloadState(
  downloads: DownloadItem[],
  platform: DownloadPlatform
): DownloadState {
  if (platform === "mobile") {
    return { status: "unsupported" }
  }

  if (platform === "unknown") {
    return { status: "unknown" }
  }

  const download = getRecommendedDownload(downloads, platform)

  return download ? { download, status: "available" } : { status: "pending" }
}

export function getDownloadButtonModel(
  downloads: DownloadItem[],
  platform: DownloadPlatform,
  platformLabel: string,
  copy: DownloadButtonCopy
): DownloadButtonModel {
  const downloadState = getDownloadState(downloads, platform)

  if (
    downloadState.status === "unsupported" ||
    downloadState.status === "unknown"
  ) {
    return {
      disabled: true,
      href: null,
      label: copy.unsupportedButton,
      status: downloadState.status,
    }
  }

  const label = copy.button.replace("{platform}", platformLabel)

  if (downloadState.status === "available") {
    return {
      disabled: false,
      href: downloadState.download.href,
      label,
      status: downloadState.status,
    }
  }

  return {
    disabled: true,
    href: null,
    label,
    status: downloadState.status,
  }
}
