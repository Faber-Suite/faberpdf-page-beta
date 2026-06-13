import Link from "next/link"

import { FaberLogo } from "@/components/marketing/faber-logo"
import { Separator } from "@/components/ui/separator"
import type { Dictionary } from "@/lib/i18n"
import { localizePath, type Locale } from "@/lib/i18n-routing"
import { siteConfig } from "@/lib/site"

type SiteFooterProps = {
  dictionary: Dictionary
  locale: Locale
}

export function SiteFooter({ dictionary, locale }: SiteFooterProps) {
  return (
    <footer className="border-t bg-surface-quiet">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto]">
          <div className="flex max-w-md flex-col gap-3">
            <Link
              href={localizePath(locale, "/")}
              className="flex w-fit items-center gap-2 text-sm font-semibold"
            >
              <FaberLogo className="size-5" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              {dictionary.footer.description}
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Product">
            <p className="text-sm font-medium">
              {dictionary.footer.productHeading}
            </p>
            {dictionary.navigation.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={localizePath(locale, item.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">
              {dictionary.footer.contactHeading}
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>

        <Separator />

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.ownerName}.{" "}
          {dictionary.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
