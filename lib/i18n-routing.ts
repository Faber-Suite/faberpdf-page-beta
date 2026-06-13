export const locales = ["en", "sr-Latn", "sr-Cyrl", "bs"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "sr-Latn": "Srpski (Latinica)",
  "sr-Cyrl": "Српски (Ћирилица)",
  bs: "Bosanski",
}

export const htmlLangs: Record<Locale, string> = {
  en: "en",
  "sr-Latn": "sr-Latn",
  "sr-Cyrl": "sr-Cyrl",
  bs: "bs",
}

const localeSet = new Set<string>(locales)

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && localeSet.has(value))
}

export function getLocaleFromPathname(pathname: string) {
  const firstSegment = pathname.split(/[/?#]/)[1]

  return isLocale(firstSegment) ? firstSegment : null
}

export function getPathWithoutLocale(pathname: string) {
  const locale = getLocaleFromPathname(pathname)

  if (!locale) {
    return pathname || "/"
  }

  const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|\\?|#|$)`), "")

  if (!stripped) {
    return "/"
  }

  return stripped.startsWith("?") || stripped.startsWith("#")
    ? `/${stripped}`
    : stripped
}

export function localizePath(locale: Locale, href: string) {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href
  }

  if (!href.startsWith("/")) {
    return href
  }

  const withoutLocale = getPathWithoutLocale(href)

  if (locale === defaultLocale) {
    return withoutLocale
  }

  return withoutLocale === "/" ? `/${locale}` : `/${locale}${withoutLocale}`
}

export function getPreferredLocale(acceptLanguage: string | null) {
  if (!acceptLanguage) {
    return defaultLocale
  }

  const requested = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean)

  for (const language of requested) {
    if (language === "sr-cyrl" || language.startsWith("sr-cyrl-")) {
      return "sr-Cyrl"
    }

    if (language === "sr-latn" || language.startsWith("sr-latn-")) {
      return "sr-Latn"
    }

    if (language === "bs" || language.startsWith("bs-")) {
      return "bs"
    }

    if (language === "sr" || language.startsWith("sr-")) {
      return "sr-Latn"
    }

    if (language === "en" || language.startsWith("en-")) {
      return "en"
    }
  }

  return defaultLocale
}
