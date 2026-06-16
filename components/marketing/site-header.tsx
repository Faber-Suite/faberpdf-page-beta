import Link from "next/link"
import { MessageSquareTextIcon } from "lucide-react"

import { DetectedDownloadButton } from "@/components/download/detected-download-button"
import { FaberLogo } from "@/components/marketing/faber-logo"
import { LanguageSwitcher } from "@/components/marketing/language-switcher"
import { ThemeToggle } from "@/components/marketing/theme-toggle"
import { Button } from "@/components/ui/button"
import type { DownloadItem } from "@/lib/download"
import type { Dictionary } from "@/lib/i18n"
import { localizePath, type Locale } from "@/lib/i18n-routing"
import { siteConfig } from "@/lib/site"

type SiteHeaderProps = {
  dictionary: Dictionary
  downloads: DownloadItem[]
  locale: Locale
}

export function SiteHeader({ dictionary, downloads, locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/88 backdrop-blur supports-[backdrop-filter]:bg-background/72">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href={localizePath(locale, "/")}
          className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-sm font-semibold transition-colors hover:bg-muted/60"
        >
          <FaberLogo />
          <span className="truncate">{siteConfig.name}</span>
        </Link>

        <nav
          aria-label={dictionary.header.primaryNavigationLabel}
          className="hidden items-center gap-1 lg:flex"
        >
          {dictionary.navigation.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={localizePath(locale, item.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher
            className="hidden sm:flex"
            label={dictionary.languageSwitcher.label}
            locale={locale}
          />
          <ThemeToggle label={dictionary.header.toggleTheme} />
          <Button
            variant="ghost"
            size="sm"
            render={<Link href={localizePath(locale, "/feedback")} />}
            nativeButton={false}
            className="hidden md:inline-flex"
          >
            <MessageSquareTextIcon data-icon="inline-start" />
            {dictionary.header.feedback}
          </Button>
          <DetectedDownloadButton
            downloadPageHref={localizePath(locale, "/download")}
            downloads={downloads}
            messages={dictionary.download}
            size="sm"
            className="hidden sm:inline-flex"
          />
        </div>
      </div>
    </header>
  )
}
