import { describe, expect, test } from "vitest"

import { createLocalizedMetadata } from "@/lib/i18n-server"
import { getDictionary } from "@/lib/i18n"
import { getLocalizedSeoAlternates } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

describe("localized metadata", () => {
  test("uses SEO alternates and snippet-friendly robots metadata", () => {
    const dictionary = getDictionary("bs")
    const metadata = createLocalizedMetadata({
      locale: "bs",
      metadata: dictionary.downloadPage.metadata,
      pathname: "/download",
    })

    expect(metadata.applicationName).toBe(siteConfig.name)
    expect(metadata.alternates?.languages).toEqual(
      getLocalizedSeoAlternates("/download")
    )
    expect(metadata.robots).toEqual({
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    })
    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        locale: "bs",
        images: [
          {
            alt: "FaberPDF - Modern local-first PDF editor",
            height: 630,
            url: `${siteConfig.url}/bs/opengraph-image`,
            width: 1200,
          },
        ],
        siteName: siteConfig.name,
      })
    )
    expect(metadata.twitter).toEqual(
      expect.objectContaining({
        images: [
          {
            alt: "FaberPDF - Modern local-first PDF editor",
            height: 630,
            url: `${siteConfig.url}/bs/twitter-image`,
            width: 1200,
          },
        ],
      })
    )
  })
})
