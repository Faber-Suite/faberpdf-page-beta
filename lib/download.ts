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

export type DownloadOption = {
  href: string
  label: string
}

export type DownloadItem = {
  href: string
  options?: DownloadOption[]
  platform: DesktopDownloadPlatform
}

export type DownloadState =
  | { download: DownloadItem; status: "available" }
  | { download: DownloadItem; status: "choices" }
  | { status: "pending" }
  | { status: "unknown" }
  | { status: "unsupported" }

export type DownloadButtonCopy = {
  button: string
  chooseButton: string
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

function hasHref(value: string | undefined) {
  return Boolean(value?.trim())
}

function getAvailableOptions(download: DownloadItem | undefined) {
  if (!download) {
    return []
  }

  const options = download.options?.filter((option) => hasHref(option.href))

  if (options?.length) {
    return options
  }

  return hasHref(download.href)
    ? [{ href: download.href, label: download.platform }]
    : []
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

export function getDownloadOptions(
  downloads: DownloadItem[],
  platform: DownloadPlatform
) {
  if (platform === "unknown" || platform === "mobile") {
    return []
  }

  const download = downloads.find((item) => item.platform === platform)

  return getAvailableOptions(download)
}

export function getRecommendedDownload(
  downloads: DownloadItem[],
  platform: DownloadPlatform
) {
  if (platform === "unknown" || platform === "mobile") {
    return null
  }

  const download = downloads.find((item) => item.platform === platform)

  return hasHref(download?.href) ? download : null
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

  const configuredDownload = downloads.find(
    (item) => item.platform === platform
  )
  const download = getRecommendedDownload(downloads, platform)

  if (download) {
    return { download, status: "available" }
  }

  if (
    configuredDownload &&
    getAvailableOptions(configuredDownload).length > 0
  ) {
    return { download: configuredDownload, status: "choices" }
  }

  return { status: "pending" }
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

  if (downloadState.status === "choices") {
    return {
      disabled: false,
      href: null,
      label: copy.chooseButton.replace("{platform}", platformLabel),
      status: downloadState.status,
    }
  }

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
