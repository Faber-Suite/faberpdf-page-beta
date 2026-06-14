import { describe, expect, it } from "vitest"

import {
  COOKIE_CONSENT_CATEGORIES,
  COOKIE_CONSENT_VERSION,
  createAcceptedCookieConsent,
  createCookieConsentRecord,
  createDefaultCookieConsent,
  createRejectedCookieConsent,
  hasCookieConsentCategory,
  parseCookieConsent,
  serializeCookieConsent,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent"

describe("cookie consent model", () => {
  it("keeps necessary enabled and optional categories disabled by default", () => {
    const consent = createDefaultCookieConsent("2026-06-14T18:00:00.000Z")

    expect(consent).toEqual({
      preferences: {
        analytics: false,
        functional: false,
        marketing: false,
        necessary: true,
        performance: false,
        personalization: false,
        security: false,
      },
      updatedAt: "2026-06-14T18:00:00.000Z",
      version: COOKIE_CONSENT_VERSION,
    })
  })

  it("can grant every category for accept-all", () => {
    const consent = createAcceptedCookieConsent("2026-06-14T18:00:00.000Z")

    expect(
      COOKIE_CONSENT_CATEGORIES.every(
        (category) => consent.preferences[category]
      )
    ).toBe(true)
  })

  it("can reject every non-essential category while keeping necessary enabled", () => {
    const consent = createRejectedCookieConsent("2026-06-14T18:00:00.000Z")

    expect(consent.preferences.necessary).toBe(true)
    expect(consent.preferences.analytics).toBe(false)
    expect(consent.preferences.marketing).toBe(false)
    expect(consent.preferences.personalization).toBe(false)
    expect(consent.preferences.functional).toBe(false)
    expect(consent.preferences.security).toBe(false)
    expect(consent.preferences.performance).toBe(false)
  })

  it("forces necessary on when creating a custom record", () => {
    const consent = createCookieConsentRecord(
      {
        analytics: true,
        marketing: true,
        necessary: false,
      },
      "2026-06-14T18:00:00.000Z"
    )

    expect(consent.preferences.necessary).toBe(true)
    expect(consent.preferences.analytics).toBe(true)
    expect(consent.preferences.marketing).toBe(true)
    expect(consent.preferences.functional).toBe(false)
  })

  it("round-trips valid stored consent", () => {
    const consent = createCookieConsentRecord(
      {
        analytics: true,
        performance: true,
      },
      "2026-06-14T18:00:00.000Z"
    )

    expect(parseCookieConsent(serializeCookieConsent(consent))).toEqual(consent)
  })

  it("rejects stored consent from another schema version", () => {
    expect(
      parseCookieConsent(
        JSON.stringify({
          preferences: createAcceptedPreferences(),
          updatedAt: "2026-06-14T18:00:00.000Z",
          version: COOKIE_CONSENT_VERSION + 1,
        })
      )
    ).toBeNull()
  })

  it("rejects stored consent with missing or extra categories", () => {
    const missingCategory =
      createAcceptedPreferences() as Partial<CookieConsentPreferences>
    delete missingCategory.performance

    expect(
      parseCookieConsent(
        JSON.stringify({
          preferences: missingCategory,
          updatedAt: "2026-06-14T18:00:00.000Z",
          version: COOKIE_CONSENT_VERSION,
        })
      )
    ).toBeNull()

    expect(
      parseCookieConsent(
        JSON.stringify({
          preferences: {
            ...createAcceptedPreferences(),
            experiments: true,
          },
          updatedAt: "2026-06-14T18:00:00.000Z",
          version: COOKIE_CONSENT_VERSION,
        })
      )
    ).toBeNull()
  })

  it("denies optional categories until valid consent grants them", () => {
    expect(hasCookieConsentCategory(null, "analytics")).toBe(false)
    expect(
      hasCookieConsentCategory(createRejectedCookieConsent(), "analytics")
    ).toBe(false)
    expect(
      hasCookieConsentCategory(createAcceptedCookieConsent(), "analytics")
    ).toBe(true)
  })

  it("always allows the necessary category", () => {
    expect(hasCookieConsentCategory(null, "necessary")).toBe(true)
    expect(
      hasCookieConsentCategory(createRejectedCookieConsent(), "necessary")
    ).toBe(true)
  })
})

function createAcceptedPreferences() {
  return Object.fromEntries(
    COOKIE_CONSENT_CATEGORIES.map((category) => [category, true])
  ) as CookieConsentPreferences
}
