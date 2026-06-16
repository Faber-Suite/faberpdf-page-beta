import { ImageResponse } from "next/og"

import { isLocale } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n-routing"
import { getSiteRelease } from "@/lib/site"

export const alt = "FaberPDF - Modern local-first PDF editor"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

const previewCopy: Record<
  Locale,
  {
    kicker: string
    title: string
  }
> = {
  en: {
    kicker: "Modern local-first PDF editor",
    title: "Sign, edit, annotate, and validate PDFs on your desktop.",
  },
  "sr-Latn": {
    kicker: "PDF editor za elektronsko potpisivanje",
    title: "Potpisivanje kvalifikovanim elektronskim sertifikatom.",
  },
  "sr-Cyrl": {
    kicker: "PDF едитор за електронско потписивање",
    title: "Потписивање квалификованим електронским сертификатом.",
  },
  bs: {
    kicker: "PDF editor za elektronsko potpisivanje",
    title: "Potpisivanje kvalifikovanim elektronskim certifikatom.",
  },
}

type ImageProps = {
  params: Promise<{ locale: string }>
}

export default async function Image({ params }: ImageProps) {
  const { locale: localeCandidate } = await params
  const locale = isLocale(localeCandidate) ? localeCandidate : "en"
  const release = await getSiteRelease()
  const copy = previewCopy[locale]

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f7f3ec",
        color: "#161512",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: 72,
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: 34,
          fontWeight: 700,
          justifyContent: "space-between",
        }}
      >
        <span>FaberPDF</span>
        <span
          style={{
            background: "#161512",
            borderRadius: 999,
            color: "#f7f3ec",
            fontSize: 24,
            padding: "14px 24px",
          }}
        >
          Beta {release.version}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 900,
        }}
      >
        <div
          style={{
            color: "#8a4b22",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          {copy.kicker}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          {copy.title}
        </div>
      </div>

      <div
        style={{
          color: "#4f4a43",
          display: "flex",
          fontSize: 28,
          gap: 22,
        }}
      >
        <span>Windows</span>
        <span>macOS</span>
        <span>Linux</span>
        <span>No browser upload</span>
      </div>
    </div>,
    size
  )
}
