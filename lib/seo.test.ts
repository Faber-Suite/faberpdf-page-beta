import { describe, expect, test } from "vitest"

import {
  buildDownloadJsonLd,
  buildFeedbackJsonLd,
  buildHomeJsonLd,
  getAbsoluteUrl,
  getLocalizedSeoAlternates,
  getRouteUrl,
  localeSearchIntent,
  publicSeoRoutes,
  serializeJsonLd,
} from "@/lib/seo"
import { locales } from "@/lib/i18n"
import { downloadItems, siteConfig } from "@/lib/site"

describe("SEO data contract", () => {
  test("covers every public route for every locale", () => {
    expect(publicSeoRoutes.map((route) => route.pathname)).toEqual([
      "/",
      "/download",
      "/feedback",
      "/terms",
      "/privacy",
    ])

    for (const route of publicSeoRoutes) {
      for (const locale of locales) {
        expect(getRouteUrl(locale, route.pathname)).toMatch(
          new RegExp(`^${siteConfig.url.replace(/\./g, "\\.")}`)
        )
      }
    }

    expect(getRouteUrl("en", "/download")).toBe(`${siteConfig.url}/download`)
    expect(getRouteUrl("sr-Latn", "/download")).toBe(
      `${siteConfig.url}/sr-Latn/download`
    )
    expect(getRouteUrl("sr-Cyrl", "/feedback")).toBe(
      `${siteConfig.url}/sr-Cyrl/feedback`
    )
    expect(getRouteUrl("bs", "/privacy")).toBe(`${siteConfig.url}/bs/privacy`)
    expect(getRouteUrl("bs", "/")).toBe(`${siteConfig.url}/bs`)
  })

  test("adds hreflang alternates and x-default for every public route", () => {
    expect(getLocalizedSeoAlternates("/download")).toEqual({
      en: `${siteConfig.url}/download`,
      "sr-Latn": `${siteConfig.url}/sr-Latn/download`,
      "sr-Cyrl": `${siteConfig.url}/sr-Cyrl/download`,
      bs: `${siteConfig.url}/bs/download`,
      "x-default": `${siteConfig.url}/download`,
    })
  })

  test("keeps search intent explicit for English and Balkan locales", () => {
    expect(localeSearchIntent.en.primaryKeywords).toEqual(
      expect.arrayContaining([
        "local PDF editor",
        "modern PDF editor",
        "offline PDF editor",
      ])
    )
    expect(localeSearchIntent["sr-Latn"].primaryKeywords).toContain(
      "potpisivanje kvalifikovanim elektronskim sertifikatom"
    )
    expect(localeSearchIntent["sr-Cyrl"].primaryKeywords).toContain(
      "потписивање квалификованим електронским сертификатом"
    )
    expect(localeSearchIntent.bs.primaryKeywords).toContain(
      "potpisivanje kvalifikovanim elektronskim certifikatom"
    )
  })

  test("builds visible-content aligned JSON-LD for core pages", () => {
    const homeJsonLd = buildHomeJsonLd("en")
    const downloadJsonLd = buildDownloadJsonLd("sr-Latn")
    const feedbackJsonLd = buildFeedbackJsonLd("bs")

    expect(homeJsonLd).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "WebSite",
          name: siteConfig.name,
          url: getAbsoluteUrl("/"),
        }),
        expect.objectContaining({
          "@type": "SoftwareApplication",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Windows, macOS, Linux",
          softwareVersion: siteConfig.betaVersion,
        }),
        expect.objectContaining({
          "@type": "FAQPage",
        }),
      ])
    )

    expect(downloadJsonLd).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "SoftwareApplication",
          downloadUrl: downloadItems.flatMap((item) =>
            item.options.map((option) => option.href)
          ),
          inLanguage: "sr-Latn",
        }),
      ])
    )

    expect(feedbackJsonLd).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "ContactPage",
          inLanguage: "bs",
        }),
      ])
    )
  })

  test("builds JSON-LD from runtime release download data", () => {
    const release = {
      downloadItems: [
        {
          href: "https://downloads.faberpdf.com/windows/FaberPDF_1.2.3_x64-setup.exe",
          options: [
            {
              href: "https://downloads.faberpdf.com/windows/FaberPDF_1.2.3_x64-setup.exe",
              label: "Windows setup (.exe)",
            },
          ],
          platform: "windows" as const,
        },
        {
          href: "",
          options: [
            {
              href: "https://downloads.faberpdf.com/macos/aarch64/FaberPDF.app.tar.gz",
              label: "Apple Silicon Mac app archive (.tar.gz)",
            },
          ],
          platform: "macos" as const,
        },
        {
          href: "https://downloads.faberpdf.com/linux/FaberPDF_1.2.3_amd64.AppImage",
          options: [
            {
              href: "https://downloads.faberpdf.com/linux/FaberPDF_1.2.3_amd64.AppImage",
              label: "Linux AppImage",
            },
          ],
          platform: "linux" as const,
        },
      ],
      version: "1.2.3",
    }

    const homeJsonLd = buildHomeJsonLd("en", release)
    const downloadJsonLd = buildDownloadJsonLd("en", release)

    expect(homeJsonLd).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "SoftwareApplication",
          downloadUrl: release.downloadItems.flatMap((item) =>
            item.options.map((option) => option.href)
          ),
          softwareVersion: "1.2.3",
        }),
      ])
    )
    expect(downloadJsonLd).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "SoftwareApplication",
          softwareVersion: "1.2.3",
        }),
      ])
    )
  })

  test("escapes JSON-LD script payloads", () => {
    const payload = serializeJsonLd({
      "@context": "https://schema.org",
      "@type": "Thing",
      name: "<script>alert('xss')</script>",
    })

    expect(payload).not.toContain("<script>")
    expect(payload).toContain("\\u003cscript>")
  })
})
