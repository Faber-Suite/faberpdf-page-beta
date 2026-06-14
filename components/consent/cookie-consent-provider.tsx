"use client"

import * as React from "react"
import { SettingsIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  OPTIONAL_COOKIE_CONSENT_CATEGORIES,
  createAcceptAllConsent,
  createConsentRecord,
  createRejectOptionalConsent,
  hasCookieConsent,
  parseConsentRecord,
  serializeConsentCookie,
  stringifyConsentRecord,
  type CookieConsentCategory,
  type CookieConsentRecord,
  type OptionalCookieConsentCategory,
} from "@/lib/cookie-consent"
import { cn } from "@/lib/utils"

type ConsentCategoryCopy = {
  description: string
  title: string
}

export type CookieConsentCopy = {
  acceptAll: string
  alwaysOn: string
  bannerDescription: string
  bannerTitle: string
  categories: Record<CookieConsentCategory, ConsentCategoryCopy>
  customize: string
  dialogDescription: string
  dialogTitle: string
  rejectOptional: string
  saveChoices: string
  settingsButton: string
}

type OptionalPreferences = Record<OptionalCookieConsentCategory, boolean>

type CookieConsentContextValue = {
  acceptAll: () => void
  consent: CookieConsentRecord | null
  hasConsent: (category: CookieConsentCategory) => boolean
  isLoaded: boolean
  openPreferences: () => void
  rejectOptional: () => void
  savePreferences: (preferences: OptionalPreferences) => void
}

const CookieConsentContext =
  React.createContext<CookieConsentContextValue | null>(null)

function getDefaultOptionalPreferences(): OptionalPreferences {
  return Object.fromEntries(
    OPTIONAL_COOKIE_CONSENT_CATEGORIES.map((category) => [category, false])
  ) as OptionalPreferences
}

function getOptionalPreferences(
  consent: CookieConsentRecord | null
): OptionalPreferences {
  return Object.fromEntries(
    OPTIONAL_COOKIE_CONSENT_CATEGORIES.map((category) => [
      category,
      consent?.preferences[category] === true,
    ])
  ) as OptionalPreferences
}

function isSecureContextForCookie() {
  return window.location.protocol === "https:"
}

function persistConsent(consent: CookieConsentRecord) {
  try {
    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      stringifyConsentRecord(consent)
    )
  } catch {
    // Consent state still updates in memory when storage is unavailable.
  }

  try {
    document.cookie = serializeConsentCookie(consent, {
      secure: isSecureContextForCookie(),
    })
  } catch {
    // Some browser modes block cookie writes; localStorage remains the primary client gate.
  }

  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_CHANGE_EVENT, { detail: consent })
  )
}

export function CookieConsentProvider({
  children,
  copy,
}: {
  children: React.ReactNode
  copy: CookieConsentCopy
}) {
  const [consent, setConsent] = React.useState<CookieConsentRecord | null>(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isPreferencesOpen, setIsPreferencesOpen] = React.useState(false)

  React.useEffect(() => {
    let cancelled = false

    window.queueMicrotask(() => {
      if (cancelled) {
        return
      }

      setConsent(
        parseConsentRecord(
          window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
        )
      )
      setIsLoaded(true)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const commitConsent = React.useCallback((nextConsent: CookieConsentRecord) => {
    setConsent(nextConsent)
    persistConsent(nextConsent)
  }, [])

  const acceptAll = React.useCallback(() => {
    commitConsent(createAcceptAllConsent())
    setIsPreferencesOpen(false)
  }, [commitConsent])

  const rejectOptional = React.useCallback(() => {
    commitConsent(createRejectOptionalConsent())
    setIsPreferencesOpen(false)
  }, [commitConsent])

  const savePreferences = React.useCallback(
    (preferences: OptionalPreferences) => {
      commitConsent(
        createConsentRecord({
          necessary: true,
          ...preferences,
        })
      )
      setIsPreferencesOpen(false)
    },
    [commitConsent]
  )

  const value = React.useMemo<CookieConsentContextValue>(
    () => ({
      acceptAll,
      consent,
      hasConsent: (category) => hasCookieConsent(consent, category),
      isLoaded,
      openPreferences: () => setIsPreferencesOpen(true),
      rejectOptional,
      savePreferences,
    }),
    [acceptAll, consent, isLoaded, rejectOptional, savePreferences]
  )

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      <CookieConsentDialog
        copy={copy}
        isPreferencesOpen={isPreferencesOpen}
        onPreferencesOpenChange={setIsPreferencesOpen}
      />
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = React.useContext(CookieConsentContext)

  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider"
    )
  }

  return context
}

export function CookieSettingsButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { isLoaded, openPreferences } = useCookieConsent()

  if (!isLoaded) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("h-auto justify-start px-0 py-0", className)}
      onClick={openPreferences}
    >
      <SettingsIcon data-icon="inline-start" />
      {children}
    </Button>
  )
}

function CookieConsentDialog({
  copy,
  isPreferencesOpen,
  onPreferencesOpenChange,
}: {
  copy: CookieConsentCopy
  isPreferencesOpen: boolean
  onPreferencesOpenChange: (open: boolean) => void
}) {
  const {
    acceptAll,
    consent,
    isLoaded,
    rejectOptional,
    savePreferences,
  } = useCookieConsent()
  const [preferences, setPreferences] = React.useState<OptionalPreferences>(
    getDefaultOptionalPreferences
  )

  React.useEffect(() => {
    if (!isPreferencesOpen) {
      return
    }

    let cancelled = false

    window.queueMicrotask(() => {
      if (cancelled) {
        return
      }

      setPreferences(getOptionalPreferences(consent))
    })

    return () => {
      cancelled = true
    }
  }, [consent, isPreferencesOpen])

  const showBanner = isLoaded && !consent && !isPreferencesOpen

  function setPreference(
    category: OptionalCookieConsentCategory,
    checked: boolean
  ) {
    setPreferences((current) => ({
      ...current,
      [category]: checked,
    }))
  }

  if (!isLoaded) {
    return null
  }

  return (
    <>
      {showBanner ? (
        <section
          aria-label={copy.bannerTitle}
          className="fixed inset-x-0 bottom-0 p-3 sm:p-4"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-xl border bg-popover/95 p-4 text-popover-foreground shadow-lg backdrop-blur supports-[backdrop-filter]:bg-popover/88 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex max-w-2xl flex-col gap-1.5">
              <p className="font-heading text-base font-medium">
                {copy.bannerTitle}
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                {copy.bannerDescription}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button variant="outline" onClick={rejectOptional}>
                {copy.rejectOptional}
              </Button>
              <Button
                variant="secondary"
                onClick={() => onPreferencesOpenChange(true)}
              >
                {copy.customize}
              </Button>
              <Button onClick={acceptAll}>{copy.acceptAll}</Button>
            </div>
          </div>
        </section>
      ) : null}

      <Dialog open={isPreferencesOpen} onOpenChange={onPreferencesOpenChange}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{copy.dialogTitle}</DialogTitle>
            <DialogDescription>{copy.dialogDescription}</DialogDescription>
          </DialogHeader>

          <FieldSet>
            <FieldLegend variant="label">{copy.customize}</FieldLegend>
            <FieldGroup className="gap-3">
              <ConsentCategoryField
                checked
                copy={copy.categories.necessary}
                disabled
                id="cookie-consent-necessary"
                badge={copy.alwaysOn}
              />

              <Separator />

              {OPTIONAL_COOKIE_CONSENT_CATEGORIES.map((category) => (
                <ConsentCategoryField
                  key={category}
                  checked={preferences[category]}
                  copy={copy.categories[category]}
                  id={`cookie-consent-${category}`}
                  onCheckedChange={(checked) =>
                    setPreference(category, checked)
                  }
                />
              ))}
            </FieldGroup>
          </FieldSet>

          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={rejectOptional}>
              {copy.rejectOptional}
            </Button>
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
              <Button
                variant="secondary"
                onClick={() => savePreferences(preferences)}
              >
                {copy.saveChoices}
              </Button>
              <Button onClick={acceptAll}>{copy.acceptAll}</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ConsentCategoryField({
  badge,
  checked,
  copy,
  disabled = false,
  id,
  onCheckedChange,
}: {
  badge?: string
  checked: boolean
  copy: ConsentCategoryCopy
  disabled?: boolean
  id: string
  onCheckedChange?: (checked: boolean) => void
}) {
  return (
    <Field orientation="horizontal" data-disabled={disabled || undefined}>
      <FieldContent>
        <FieldTitle id={`${id}-title`}>
          {copy.title}
          {badge ? (
            <Badge variant="secondary">{badge}</Badge>
          ) : null}
        </FieldTitle>
        <FieldDescription>{copy.description}</FieldDescription>
      </FieldContent>
      <Switch
        aria-labelledby={`${id}-title`}
        checked={checked}
        disabled={disabled}
        id={id}
        onCheckedChange={(nextChecked) => onCheckedChange?.(nextChecked)}
      />
    </Field>
  )
}
