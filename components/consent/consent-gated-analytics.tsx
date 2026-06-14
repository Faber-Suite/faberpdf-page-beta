"use client"

import { Analytics } from "@vercel/analytics/next"

import { useCookieConsent } from "@/components/consent/cookie-consent-provider"

export function ConsentGatedAnalytics() {
  const { hasConsent, isLoaded } = useCookieConsent()

  if (!isLoaded || !hasConsent("analytics")) {
    return null
  }

  return <Analytics />
}
