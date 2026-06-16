import { getDictionary, htmlLangs, locales, localizePath } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n-routing"
import {
  downloadItems as fallbackDownloadItems,
  siteConfig,
  type SiteRelease,
} from "@/lib/site"

type JsonLdPrimitive = string | number | boolean | null
type JsonLdValue =
  | JsonLdPrimitive
  | JsonLdValue[]
  | { [key: string]: JsonLdValue }

export type JsonLdObject = { [key: string]: JsonLdValue }
type SeoRelease = Pick<SiteRelease, "downloadItems" | "version">

const fallbackRelease: SeoRelease = {
  downloadItems: fallbackDownloadItems,
  version: siteConfig.betaVersion,
}

export const seoLastModified = new Date("2026-06-15T00:00:00.000Z")

export const metadataRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
} as const

export const socialImageMetadata = {
  alt: "FaberPDF - Modern local-first PDF editor",
  height: 630,
  width: 1200,
} as const

export const publicSeoRoutes = [
  {
    pathname: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    pathname: "/download",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    pathname: "/feedback",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    pathname: "/terms",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    pathname: "/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
] as const

export type PublicSeoPathname = (typeof publicSeoRoutes)[number]["pathname"]

export const localeSearchIntent: Record<
  Locale,
  {
    audience: string
    primaryKeywords: string[]
    summary: string
  }
> = {
  en: {
    audience: "Global desktop PDF editor evaluators",
    primaryKeywords: [
      "local PDF editor",
      "modern PDF editor",
      "offline PDF editor",
      "desktop PDF editor",
      "local-first PDF editor",
      "PDF signing",
      "PDF annotation",
      "edit PDF text",
    ],
    summary:
      "FaberPDF is positioned as a modern local-first desktop PDF editor for signing, annotating, validating, and focused PDF edits without browser uploads.",
  },
  "sr-Latn": {
    audience: "Serbian Latin visitors searching for qualified signing",
    primaryKeywords: [
      "potpisivanje kvalifikovanim elektronskim sertifikatom",
      "PDF potpisivanje kvalifikovanim sertifikatom",
      "PDF editor za elektronsko potpisivanje",
      "lokalni PDF editor",
    ],
    summary:
      "FaberPDF je pozicioniran za potpisivanje kvalifikovanim elektronskim sertifikatom i lokalni rad sa PDF dokumentima.",
  },
  "sr-Cyrl": {
    audience: "Serbian Cyrillic visitors searching for qualified signing",
    primaryKeywords: [
      "потписивање квалификованим електронским сертификатом",
      "PDF потписивање квалификованим сертификатом",
      "PDF едитор за електронско потписивање",
      "локални PDF едитор",
    ],
    summary:
      "FaberPDF је позициониран за потписивање квалификованим електронским сертификатом и локални рад са PDF документима.",
  },
  bs: {
    audience: "Bosnian visitors searching for qualified signing",
    primaryKeywords: [
      "potpisivanje kvalifikovanim elektronskim certifikatom",
      "PDF potpisivanje kvalifikovanim certifikatom",
      "PDF editor za elektronsko potpisivanje",
      "lokalni PDF editor",
    ],
    summary:
      "FaberPDF je pozicioniran za potpisivanje kvalifikovanim elektronskim certifikatom i lokalni rad sa PDF dokumentima.",
  },
}

export function getAbsoluteUrl(pathname: string) {
  const baseUrl = siteConfig.url.replace(/\/+$/, "")
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`

  return path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`
}

export function getRouteUrl(locale: Locale, pathname: PublicSeoPathname) {
  return getAbsoluteUrl(localizePath(locale, pathname))
}

export function getLocalizedSeoAlternates(pathname: PublicSeoPathname) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, getRouteUrl(locale, pathname)])
    ),
    "x-default": getRouteUrl("en", pathname),
  }
}

export function getAlternateOpenGraphLocales(locale: Locale) {
  return locales
    .filter((alternateLocale) => alternateLocale !== locale)
    .map((alternateLocale) => htmlLangs[alternateLocale])
}

export function getOpenGraphImage(locale: Locale) {
  return {
    ...socialImageMetadata,
    url: getAbsoluteUrl(`/${locale}/opengraph-image`),
  }
}

export function getTwitterImage(locale: Locale) {
  return {
    ...socialImageMetadata,
    url: getAbsoluteUrl(`/${locale}/twitter-image`),
  }
}

export function serializeJsonLd(value: JsonLdValue) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}

function getDownloadUrls(release: SeoRelease) {
  return release.downloadItems.flatMap((item) =>
    item.options?.length
      ? item.options.map((option) => option.href)
      : item.href
        ? [item.href]
        : []
  )
}

function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": getAbsoluteUrl("/#organization"),
    name: siteConfig.name,
    url: getAbsoluteUrl("/"),
    email: siteConfig.contactEmail,
    founder: {
      "@type": "Person",
      name: siteConfig.ownerName,
    },
  }
}

function websiteJsonLd(locale: Locale): JsonLdObject {
  const dictionary = getDictionary(locale)

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": getAbsoluteUrl("/#website"),
    name: siteConfig.name,
    url: getAbsoluteUrl("/"),
    description: dictionary.metadata.description,
    inLanguage: htmlLangs[locale],
    publisher: {
      "@id": getAbsoluteUrl("/#organization"),
    },
  }
}

function softwareApplicationJsonLd(
  locale: Locale,
  release: SeoRelease = fallbackRelease
): JsonLdObject {
  const dictionary = getDictionary(locale)

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": getAbsoluteUrl("/#software"),
    name: siteConfig.name,
    description: dictionary.metadata.description,
    url: getRouteUrl(locale, "/"),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "PDF editor",
    operatingSystem: "Windows, macOS, Linux",
    softwareVersion: release.version,
    isAccessibleForFree: true,
    inLanguage: htmlLangs[locale],
    downloadUrl: getDownloadUrls(release),
  }
}

function faqJsonLd(locale: Locale): JsonLdObject {
  const dictionary = getDictionary(locale)

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${getRouteUrl(locale, "/")}#faq`,
    inLanguage: htmlLangs[locale],
    mainEntity: dictionary.home.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

function webPageJsonLd(
  locale: Locale,
  pathname: PublicSeoPathname
): JsonLdObject {
  const dictionary = getDictionary(locale)
  const title =
    pathname === "/download"
      ? dictionary.downloadPage.metadata.title
      : pathname === "/feedback"
        ? dictionary.feedback.metadata.title
        : dictionary.metadata.defaultTitle
  const description =
    pathname === "/download"
      ? dictionary.downloadPage.metadata.description
      : pathname === "/feedback"
        ? dictionary.feedback.metadata.description
        : dictionary.metadata.description

  return {
    "@context": "https://schema.org",
    "@type": pathname === "/feedback" ? "ContactPage" : "WebPage",
    "@id": `${getRouteUrl(locale, pathname)}#webpage`,
    url: getRouteUrl(locale, pathname),
    name: title,
    description,
    inLanguage: htmlLangs[locale],
    isPartOf: {
      "@id": getAbsoluteUrl("/#website"),
    },
    about: {
      "@id": getAbsoluteUrl("/#software"),
    },
  }
}

export function buildHomeJsonLd(
  locale: Locale,
  release: SeoRelease = fallbackRelease
) {
  return [
    organizationJsonLd(),
    websiteJsonLd(locale),
    softwareApplicationJsonLd(locale, release),
    faqJsonLd(locale),
  ]
}

export function buildDownloadJsonLd(
  locale: Locale,
  release: SeoRelease = fallbackRelease
) {
  return [
    organizationJsonLd(),
    webPageJsonLd(locale, "/download"),
    softwareApplicationJsonLd(locale, release),
  ]
}

export function buildFeedbackJsonLd(locale: Locale) {
  return [organizationJsonLd(), webPageJsonLd(locale, "/feedback")]
}
