"use client"

import * as React from "react"
import {
  ArrowDownToLineIcon,
  ArrowRightIcon,
  ClockIcon,
  MonitorDownIcon,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  detectDownloadPlatform,
  getDownloadButtonModel,
  type DownloadItem,
  type DownloadPlatform,
} from "@/lib/download"
import type { Dictionary } from "@/lib/i18n"

type DetectedDownloadButtonProps = {
  className?: string
  downloadPageHref?: string
  downloads: DownloadItem[]
  messages: Pick<
    Dictionary["download"],
    | "button"
    | "chooseButton"
    | "pendingButton"
    | "platformNames"
    | "unsupportedButton"
  >
  size?: React.ComponentProps<typeof Button>["size"]
}

function getNavigatorPlatform(): DownloadPlatform {
  if (typeof navigator === "undefined") {
    return "unknown"
  }

  const nav = navigator as Navigator & {
    userAgentData?: {
      platform?: string
    }
  }

  return detectDownloadPlatform({
    platform: nav.platform,
    userAgent: nav.userAgent,
    userAgentDataPlatform: nav.userAgentData?.platform,
  })
}

function subscribeToPlatformSnapshot() {
  return () => {}
}

function getServerPlatformSnapshot(): DownloadPlatform {
  return "unknown"
}

export function DetectedDownloadButton({
  className,
  downloadPageHref,
  downloads,
  messages,
  size = "default",
}: DetectedDownloadButtonProps) {
  const detectedPlatform = React.useSyncExternalStore(
    subscribeToPlatformSnapshot,
    getNavigatorPlatform,
    getServerPlatformSnapshot
  )
  const buttonModel = React.useMemo(
    () =>
      getDownloadButtonModel(
        downloads,
        detectedPlatform,
        messages.platformNames[detectedPlatform],
        {
          button: messages.button,
          chooseButton: messages.chooseButton,
          pendingButton: messages.pendingButton,
          unsupportedButton: messages.unsupportedButton,
        }
      ),
    [detectedPlatform, downloads, messages]
  )

  const choiceHref =
    buttonModel.status === "choices" ? downloadPageHref : undefined
  const href = buttonModel.href ?? choiceHref

  if (href) {
    const isInstallerDownload = Boolean(buttonModel.href)

    return (
      <Button
        render={
          isInstallerDownload ? (
            <a href={href} download />
          ) : (
            <Link href={href} />
          )
        }
        nativeButton={false}
        className={className}
        size={size}
      >
        {isInstallerDownload ? (
          <ArrowDownToLineIcon data-icon="inline-start" />
        ) : (
          <ArrowRightIcon data-icon="inline-start" />
        )}
        {buttonModel.label}
      </Button>
    )
  }

  return (
    <Button className={className} disabled size={size}>
      {buttonModel.status === "pending" ? (
        <ClockIcon data-icon="inline-start" />
      ) : (
        <MonitorDownIcon data-icon="inline-start" />
      )}
      {buttonModel.label}
    </Button>
  )
}
