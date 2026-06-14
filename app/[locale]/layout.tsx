import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"

import "../globals.css"
import { ConsentGatedAnalytics } from "@/components/consent/consent-gated-analytics"
import { CookieConsentProvider } from "@/components/consent/cookie-consent-provider"
import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import {
  getDictionary,
  getLocalizedAlternates,
  isLocale,
  locales,
  localizePath,
} from "@/lib/i18n"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const fontSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600", "700"],
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
})

type RootLayoutProps = Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: Pick<RootLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dictionary = getDictionary(locale)
  const url = localizePath(locale, "/")

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dictionary.metadata.defaultTitle,
      template: dictionary.metadata.titleTemplate,
    },
    description: dictionary.metadata.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.ownerName }],
    category: "software",
    creator: siteConfig.ownerName,
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    keywords: siteConfig.keywords,
    publisher: siteConfig.ownerName,
    referrer: "strict-origin-when-cross-origin",
    alternates: {
      canonical: url,
      languages: getLocalizedAlternates("/"),
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: dictionary.metadata.defaultTitle,
      description: dictionary.metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.defaultTitle,
      description: dictionary.metadata.description,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dictionary = getDictionary(locale)

  return (
    <html
      lang={dictionary.htmlLang}
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <CookieConsentProvider copy={dictionary.cookieConsent}>
            <div className="flex min-h-svh flex-col">
              <SiteHeader dictionary={dictionary} locale={locale} />
              <div className="flex-1">{children}</div>
              <SiteFooter dictionary={dictionary} locale={locale} />
            </div>
            <ConsentGatedAnalytics />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
