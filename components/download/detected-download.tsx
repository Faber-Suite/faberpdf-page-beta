"use client"

import * as React from "react"
import { ArrowDownToLineIcon, ClockIcon, MonitorDownIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  detectDownloadPlatform,
  getDownloadButtonModel,
  getDownloadState,
  getRecommendedDownload,
  type DesktopDownloadPlatform,
  type DownloadItem,
  type DownloadPlatform,
} from "@/lib/download"
import type { Dictionary } from "@/lib/i18n"

type DetectedDownloadProps = {
  downloads: DownloadItem[]
  messages: Dictionary["download"]
}

const desktopPlatforms: DesktopDownloadPlatform[] = [
  "windows",
  "macos",
  "linux",
]

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

export function DetectedDownload({
  downloads,
  messages,
}: DetectedDownloadProps) {
  const detectedPlatform = React.useSyncExternalStore(
    subscribeToPlatformSnapshot,
    getNavigatorPlatform,
    getServerPlatformSnapshot
  )
  const [manualPlatform, setManualPlatform] =
    React.useState<DownloadPlatform | null>(null)
  const selectedPlatform = manualPlatform ?? detectedPlatform

  const recommendedDownload = React.useMemo(
    () => getRecommendedDownload(downloads, selectedPlatform),
    [downloads, selectedPlatform]
  )
  const downloadState = React.useMemo(
    () => getDownloadState(downloads, selectedPlatform),
    [downloads, selectedPlatform]
  )
  const selectedLabel = messages.platformNames[selectedPlatform]
  const buttonModel = React.useMemo(
    () =>
      getDownloadButtonModel(downloads, selectedPlatform, selectedLabel, {
        button: messages.button,
        unsupportedButton: messages.unsupportedButton,
      }),
    [
      downloads,
      messages.button,
      messages.unsupportedButton,
      selectedLabel,
      selectedPlatform,
    ]
  )
  const isDesktopPlatform =
    selectedPlatform !== "unknown" && selectedPlatform !== "mobile"
  const isUnsupportedPlatform = downloadState.status === "unsupported"
  const platformItems = React.useMemo(
    () => [
      {
        label: messages.selectPlaceholder,
        value: "unknown",
      },
      ...desktopPlatforms.map((platform) => ({
        label: messages.platformNames[platform],
        value: platform,
      })),
    ],
    [messages.platformNames, messages.selectPlaceholder]
  )

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <MonitorDownIcon data-icon="inline-start" />
              {messages.detectedLabel}:{" "}
              {messages.platformNames[detectedPlatform]}
            </Badge>
            {recommendedDownload ? (
              <Badge>
                <ArrowDownToLineIcon data-icon="inline-start" />
                {messages.recommendedBadge}
              </Badge>
            ) : isUnsupportedPlatform ? (
              <Badge variant="outline">
                <MonitorDownIcon data-icon="inline-start" />
                {messages.unsupportedBadge}
              </Badge>
            ) : (
              <Badge variant="outline">
                <ClockIcon data-icon="inline-start" />
                {isDesktopPlatform
                  ? messages.pendingBadge
                  : messages.selectPlaceholder}
              </Badge>
            )}
          </div>
          <CardTitle>
            {isUnsupportedPlatform
              ? messages.unsupportedTitle
              : messages.platformNames[selectedPlatform]}
          </CardTitle>
          <CardDescription>
            {isUnsupportedPlatform
              ? messages.unsupportedDescription
              : isDesktopPlatform
                ? messages.formats[selectedPlatform]
                : messages.details.unknown}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <p className="text-sm leading-6 text-muted-foreground">
            {messages.details[selectedPlatform]}
          </p>
          {!isUnsupportedPlatform ? (
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="download-platform">
                  {messages.selectLabel}
                </FieldLabel>
                <Select
                  items={platformItems}
                  value={selectedPlatform}
                  onValueChange={(value) =>
                    setManualPlatform(value as DownloadPlatform)
                  }
                >
                  <SelectTrigger id="download-platform" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent alignItemWithTrigger={false}>
                    <SelectGroup>
                      {platformItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          ) : null}
        </CardContent>
        <CardFooter>
          {buttonModel.href ? (
            <Button
              render={<a href={buttonModel.href} download />}
              nativeButton={false}
              className="w-full sm:w-fit sm:min-w-56"
              size="lg"
            >
              <ArrowDownToLineIcon data-icon="inline-start" />
              {buttonModel.label}
            </Button>
          ) : (
            <Button className="w-full sm:w-fit sm:min-w-56" disabled size="lg">
              {buttonModel.status === "pending" ? (
                <ClockIcon data-icon="inline-start" />
              ) : (
                <MonitorDownIcon data-icon="inline-start" />
              )}
              {buttonModel.label}
            </Button>
          )}
        </CardFooter>
      </Card>

      <Alert className="content-start">
        {isUnsupportedPlatform ? (
          <MonitorDownIcon />
        ) : downloadState.status === "available" ? (
          <ArrowDownToLineIcon />
        ) : (
          <ClockIcon />
        )}
        <AlertTitle>
          {isUnsupportedPlatform
            ? messages.unsupportedAlertTitle
            : messages.noteTitle}
        </AlertTitle>
        <AlertDescription>
          {isUnsupportedPlatform
            ? messages.unsupportedAlertDescription
            : messages.noteDescription}
        </AlertDescription>
      </Alert>
    </div>
  )
}
