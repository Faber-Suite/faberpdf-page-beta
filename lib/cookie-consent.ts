export const COOKIE_CONSENT_VERSION = 1

export const COOKIE_CONSENT_STORAGE_KEY = "faberpdf.cookie-consent.v1"

export const COOKIE_CONSENT_COOKIE_NAME = "faberpdf_cookie_consent"

export const COOKIE_CONSENT_CHANGE_EVENT = "faberpdf:cookie-consent-change"

export const COOKIE_CONSENT_CATEGORIES = [
  "necessary",
  "analytics",
  "marketing",
  "personalization",
  "functional",
  "security",
  "performance",
] as const

export type CookieConsentCategory = (typeof COOKIE_CONSENT_CATEGORIES)[number]

export const OPTIONAL_COOKIE_CONSENT_CATEGORIES = [
  "functional",
  "analytics",
  "performance",
  "personalization",
  "marketing",
  "security",
] as const satisfies readonly Exclude<CookieConsentCategory, "necessary">[]

export type OptionalCookieConsentCategory =
  (typeof OPTIONAL_COOKIE_CONSENT_CATEGORIES)[number]

export type CookieConsentPreferences = Record<CookieConsentCategory, boolean>

export type CookieConsentRecord = {
  preferences: CookieConsentPreferences
  updatedAt: string
  version: typeof COOKIE_CONSENT_VERSION
}

function getTimestamp(timestamp?: string) {
  return timestamp ?? new Date().toISOString()
}

export function createDefaultCookieConsent(
  updatedAt?: string
): CookieConsentRecord {
  return createCookieConsentRecord({}, updatedAt)
}

export function createAcceptedCookieConsent(
  updatedAt?: string
): CookieConsentRecord {
  return createCookieConsentRecord(
    Object.fromEntries(
      COOKIE_CONSENT_CATEGORIES.map((category) => [category, true])
    ) as CookieConsentPreferences,
    updatedAt
  )
}

export function createRejectedCookieConsent(
  updatedAt?: string
): CookieConsentRecord {
  return createDefaultCookieConsent(updatedAt)
}

export function createCookieConsentRecord(
  preferences: Partial<CookieConsentPreferences>,
  updatedAt?: string
): CookieConsentRecord {
  return {
    preferences: {
      analytics: preferences.analytics ?? false,
      functional: preferences.functional ?? false,
      marketing: preferences.marketing ?? false,
      necessary: true,
      performance: preferences.performance ?? false,
      personalization: preferences.personalization ?? false,
      security: preferences.security ?? false,
    },
    updatedAt: getTimestamp(updatedAt),
    version: COOKIE_CONSENT_VERSION,
  }
}

export function serializeCookieConsent(consent: CookieConsentRecord) {
  return JSON.stringify(consent)
}

export const stringifyConsentRecord = serializeCookieConsent

export function parseCookieConsent(value: string | null) {
  if (!value) {
    return null
  }

  try {
    const parsed: unknown = JSON.parse(value)

    if (!isCookieConsentRecord(parsed)) {
      return null
    }

    return parsed
  } catch {
    return null
  }
}

export const parseConsentRecord = parseCookieConsent

export function hasCookieConsentCategory(
  consent: CookieConsentRecord | null,
  category: CookieConsentCategory
) {
  if (category === "necessary") {
    return true
  }

  return consent?.preferences[category] === true
}

export const hasCookieConsent = hasCookieConsentCategory

export const createAcceptAllConsent = createAcceptedCookieConsent

export const createRejectOptionalConsent = createRejectedCookieConsent

export const createConsentRecord = createCookieConsentRecord

export function serializeConsentCookie(
  consent: CookieConsentRecord,
  options: { secure?: boolean } = {}
) {
  const secureAttribute = options.secure ? "; Secure" : ""

  return [
    `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(
      serializeCookieConsent(consent)
    )}`,
    "Path=/",
    "Max-Age=31536000",
    "SameSite=Lax",
    secureAttribute,
  ]
    .filter(Boolean)
    .join("; ")
}

export function isCookieConsentRecord(
  value: unknown
): value is CookieConsentRecord {
  if (!isObject(value)) {
    return false
  }

  if (value.version !== COOKIE_CONSENT_VERSION) {
    return false
  }

  if (typeof value.updatedAt !== "string" || value.updatedAt.length === 0) {
    return false
  }

  const preferences = value.preferences

  if (!isObject(preferences)) {
    return false
  }

  const keys = Object.keys(preferences).sort()
  const expectedKeys = [...COOKIE_CONSENT_CATEGORIES].sort()

  if (
    keys.length !== expectedKeys.length ||
    keys.some((key, index) => key !== expectedKeys[index])
  ) {
    return false
  }

  if (preferences.necessary !== true) {
    return false
  }

  return OPTIONAL_COOKIE_CONSENT_CATEGORIES.every(
    (category) => typeof preferences[category] === "boolean"
  )
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}
