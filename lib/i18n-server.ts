import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getDictionary, isLocale, localizePath } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n-routing"
import {
  getAlternateOpenGraphLocales,
  getLocalizedSeoAlternates,
  getOpenGraphImage,
  getTwitterImage,
  localeSearchIntent,
  metadataRobots,
  type PublicSeoPathname,
} from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export type LocalePageProps = {
  params: Promise<{ locale: string }>
}

export async function getLocaleDictionary(
  params: Promise<{ locale: string }>,
  options?: Parameters<typeof getDictionary>[1]
) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return {
    dictionary: getDictionary(locale, options),
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
  pathname: PublicSeoPathname
}): Metadata {
  const url = localizePath(locale, pathname)

  return {
    applicationName: siteConfig.name,
    title: metadata.title,
    description: metadata.description,
    category: "software",
    creator: siteConfig.ownerName,
    keywords: localeSearchIntent[locale].primaryKeywords,
    publisher: siteConfig.ownerName,
    robots: metadataRobots,
    alternates: {
      canonical: url,
      languages: getLocalizedSeoAlternates(pathname),
    },
    openGraph: {
      title: `${metadata.title} - ${siteConfig.name}`,
      description: metadata.description,
      url,
      siteName: siteConfig.name,
      locale,
      alternateLocale: getAlternateOpenGraphLocales(locale),
      images: [getOpenGraphImage(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: `${metadata.title} - ${siteConfig.name}`,
      description: metadata.description,
      images: [getTwitterImage(locale)],
    },
  }
}
