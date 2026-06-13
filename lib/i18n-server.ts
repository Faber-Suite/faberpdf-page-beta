import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getDictionary,
  getLocalizedAlternates,
  isLocale,
  localizePath,
} from "@/lib/i18n"
import type { Locale } from "@/lib/i18n-routing"
import { siteConfig } from "@/lib/site"

export type LocalePageProps = {
  params: Promise<{ locale: string }>
}

export async function getLocaleDictionary(params: Promise<{ locale: string }>) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return {
    dictionary: getDictionary(locale),
    locale,
  }
}

export function createLocalizedMetadata({
  locale,
  metadata,
  pathname,
}: {
  locale: Locale
  metadata: {
    description: string
    title: string
  }
  pathname: string
}): Metadata {
  const url = localizePath(locale, pathname)

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: url,
      languages: getLocalizedAlternates(pathname),
    },
    openGraph: {
      title: `${metadata.title} - ${siteConfig.name}`,
      description: metadata.description,
      url,
    },
    twitter: {
      title: `${metadata.title} - ${siteConfig.name}`,
      description: metadata.description,
    },
  }
}
