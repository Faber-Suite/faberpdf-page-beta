import { describe, expect, test } from "vitest"

import manifest from "@/app/manifest"
import robots from "@/app/robots"
import sitemap from "@/app/sitemap"
import { locales } from "@/lib/i18n"
import { getRouteUrl, publicSeoRoutes } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

describe("Next metadata routes", () => {
  test("generates a localized sitemap with alternates", () => {
    const entries = sitemap()

    expect(entries).toHaveLength(publicSeoRoutes.length * locales.length)
    expect(entries).toContainEqual(
      expect.objectContaining({
        url: getRouteUrl("en", "/"),
        priority: 1,
        changeFrequency: "weekly",
        alternates: {
          languages: {
            en: getRouteUrl("en", "/"),
            "sr-Latn": getRouteUrl("sr-Latn", "/"),
            "sr-Cyrl": getRouteUrl("sr-Cyrl", "/"),
            bs: getRouteUrl("bs", "/"),
            "x-default": getRouteUrl("en", "/"),
          },
        },
      })
    )
    expect(entries).toContainEqual(
      expect.objectContaining({
        url: getRouteUrl("bs", "/download"),
        priority: 0.9,
      })
    )
  })

  test("allows crawlers and advertises the sitemap", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      sitemap: `${siteConfig.url}/sitemap.xml`,
      host: siteConfig.url,
    })
  })

  test("describes FaberPDF as an installable product site", () => {
    expect(manifest()).toEqual(
      expect.objectContaining({
        name: siteConfig.name,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        categories: ["business", "productivity", "utilities"],
      })
    )
  })
})
