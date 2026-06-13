"use client"

import { usePathname, useRouter } from "next/navigation"
import { ChevronDownIcon, LanguagesIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  getPathWithoutLocale,
  localeLabels,
  locales,
  localizePath,
  type Locale,
} from "@/lib/i18n-routing"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  className?: string
  label: string
  locale: Locale
}

export function LanguageSwitcher({
  className,
  label,
  locale,
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  function onLocaleChange(nextLocale: string) {
    const search = typeof window === "undefined" ? "" : window.location.search
    const hash = typeof window === "undefined" ? "" : window.location.hash
    const nextPath = localizePath(
      nextLocale as Locale,
      `${getPathWithoutLocale(pathname)}${search}`
    )

    router.push(`${nextPath}${hash}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            aria-label={label}
            className={cn("w-40 justify-between", className)}
          />
        }
      >
        <LanguagesIcon data-icon="inline-start" />
        <span className="truncate">{localeLabels[locale]}</span>
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={locale}
            onValueChange={(nextLocale) => onLocaleChange(nextLocale)}
          >
            {locales.map((availableLocale) => (
              <DropdownMenuRadioItem
                key={availableLocale}
                value={availableLocale}
              >
                {localeLabels[availableLocale]}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
