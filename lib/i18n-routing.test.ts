import { describe, expect, it } from "vitest"

import {
  getLocaleFromPathname,
  getPathWithoutLocale,
  getPreferredLocale,
  localizePath,
} from "@/lib/i18n-routing"

describe("localized routing helpers", () => {
  it("keeps English routes unprefixed and prefixes regional locales", () => {
    expect(localizePath("en", "/feedback")).toBe("/feedback")
    expect(localizePath("sr-Latn", "/feedback")).toBe("/sr-Latn/feedback")
    expect(localizePath("sr-Cyrl", "/#download")).toBe("/sr-Cyrl/#download")
    expect(localizePath("bs", "/feedback?source=site")).toBe(
      "/bs/feedback?source=site"
    )
  })

  it("extracts and strips supported locale prefixes", () => {
    expect(getLocaleFromPathname("/sr-Cyrl/feedback")).toBe("sr-Cyrl")
    expect(getPathWithoutLocale("/sr-Latn/feedback?source=site")).toBe(
      "/feedback?source=site"
    )
    expect(getPathWithoutLocale("/bs")).toBe("/")
  })

  it("maps browser language preferences to the supported locale set", () => {
    expect(getPreferredLocale("sr-Cyrl, sr;q=0.9, en;q=0.7")).toBe("sr-Cyrl")
    expect(getPreferredLocale("sr-RS, en;q=0.7")).toBe("sr-Latn")
    expect(getPreferredLocale("bs-BA, en;q=0.7")).toBe("bs")
    expect(getPreferredLocale("de-DE, fr;q=0.7")).toBe("en")
  })
})
