import { describe, expect, test } from "vitest"
import { readFileSync } from "node:fs"
import { join } from "node:path"

import { getDictionary, locales } from "@/lib/i18n"

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value]
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectStrings)
  }

  if (typeof value === "object" && value !== null) {
    return Object.values(value).flatMap(collectStrings)
  }

  return []
}

describe("public website copy", () => {
  test("does not mention accounts or checkouts", () => {
    const bannedCopyPattern =
      /\b(accounts?|checkouts?|sign-?ins?|logins?)\b|\bnalog(a|om|u)?\b|\bprijav(a|u|e|om)?\b|налог(а|ом|у)?|пријав(а|у|е|ом)?/i

    const strings = locales.flatMap((locale) =>
      collectStrings(getDictionary(locale))
    )

    expect(strings.filter((text) => bannedCopyPattern.test(text))).toEqual([])
  })

  test("positions each locale with market-native conversion copy", () => {
    const english = collectStrings(getDictionary("en")).join("\n")
    const serbianLatin = collectStrings(getDictionary("sr-Latn")).join("\n")
    const serbianCyrillic = collectStrings(getDictionary("sr-Cyrl")).join("\n")
    const bosnian = collectStrings(getDictionary("bs")).join("\n")

    expect(english).toContain("modern local-first PDF editor")
    expect(english).toContain("without uploading documents to a browser tool")
    expect(english).toContain("Currently in beta")

    expect(serbianLatin).toContain(
      "potpisivanje kvalifikovanim elektronskim sertifikatom"
    )
    expect(serbianLatin).toContain("trenutno u beta verziji")

    expect(serbianCyrillic).toContain(
      "потписивање квалификованим електронским сертификатом"
    )
    expect(serbianCyrillic).toContain("тренутно у бета верзији")

    expect(bosnian).toContain(
      "potpisivanje kvalifikovanim elektronskim certifikatom"
    )
    expect(bosnian).toContain("trenutno u beta verziji")
  })

  test("public pickers use shadcn dropdown components", () => {
    const componentSources = [
      "components/marketing/language-switcher.tsx",
      "components/download/detected-download.tsx",
      "components/feedback/feedback-form.tsx",
    ].map((filePath) => readFileSync(join(process.cwd(), filePath), "utf8"))

    const source = componentSources.join("\n")

    expect(source).toContain("@/components/ui/dropdown-menu")
    expect(source).toContain("@/components/ui/select")
    expect(source).not.toContain("@/components/ui/native-select")
  })

  test("site header exposes a localized theme toggle", () => {
    const dictionaries = locales.map((locale) => getDictionary(locale))
    const siteHeaderSource = readFileSync(
      join(process.cwd(), "components/marketing/site-header.tsx"),
      "utf8"
    )

    expect(
      dictionaries.map((dictionary) => dictionary.header.toggleTheme)
    ).toEqual([
      "Toggle theme",
      "Promeni temu",
      "Промени тему",
      "Promijeni temu",
    ])
    expect(siteHeaderSource).toContain("<ThemeToggle")
  })

  test("download help copy describes live hosted installers", () => {
    const strings = locales
      .map((locale) => getDictionary(locale).download)
      .flatMap(collectStrings)
      .join("\n")

    expect(strings).toContain("downloads.faberpdf.com")
    expect(strings).not.toMatch(/environment variable|NEXT_PUBLIC/i)
  })

  test("public pages render localized JSON-LD from SEO builders", () => {
    const pageSources = [
      "app/[locale]/page.tsx",
      "app/[locale]/download/page.tsx",
      "app/[locale]/feedback/page.tsx",
    ].map((filePath) => readFileSync(join(process.cwd(), filePath), "utf8"))

    expect(pageSources[0]).toContain("buildHomeJsonLd")
    expect(pageSources[1]).toContain("buildDownloadJsonLd")
    expect(pageSources[2]).toContain("buildFeedbackJsonLd")
    expect(pageSources.join("\n")).toContain("serializeJsonLd")
  })

  test("localized routes generate rich social preview images", () => {
    const source = [
      "app/[locale]/opengraph-image.tsx",
      "app/[locale]/twitter-image.tsx",
    ]
      .map((filePath) => readFileSync(join(process.cwd(), filePath), "utf8"))
      .join("\n")

    expect(source).toContain("ImageResponse")
    expect(source).toContain("width: 1200")
    expect(source).toContain("height: 630")
    expect(source).toContain("FaberPDF")
    expect(source).toContain("Modern local-first PDF editor")
  })

  test("proxy preserves generated social image URLs", () => {
    const source = readFileSync(join(process.cwd(), "proxy.ts"), "utf8")

    expect(source).toContain("opengraph-image")
    expect(source).toContain("twitter-image")
  })
})
