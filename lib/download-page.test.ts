import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, test } from "vitest"

import { getDictionary, locales, localizePath } from "@/lib/i18n"

describe("download page routing", () => {
  test("exposes a dedicated localized download page", () => {
    expect(
      existsSync(join(process.cwd(), "app/[locale]/download/page.tsx"))
    ).toBe(true)

    expect(localizePath("en", "/download")).toBe("/download")
    expect(localizePath("sr-Latn", "/download")).toBe("/sr-Latn/download")
    expect(localizePath("sr-Cyrl", "/download")).toBe("/sr-Cyrl/download")
    expect(localizePath("bs", "/download")).toBe("/bs/download")
  })

  test("navigation links keep the dedicated download page discoverable", () => {
    for (const locale of locales) {
      const dictionary = getDictionary(locale)
      const downloadNavItem = dictionary.navigation.find((item) =>
        item.href.includes("download")
      )

      expect(downloadNavItem?.href).toBe("/download")
    }

    const homepageSource = readFileSync(
      join(process.cwd(), "app/[locale]/page.tsx"),
      "utf8"
    )
    const headerSource = readFileSync(
      join(process.cwd(), "components/marketing/site-header.tsx"),
      "utf8"
    )

    expect(homepageSource).not.toContain('id="download"')
    expect(homepageSource).not.toContain('"/#download"')
    expect(headerSource).not.toContain('"/#download"')
    expect(headerSource).toContain("dictionary.navigation.map")
  })

  test("button-style download CTAs use detected operating system copy", () => {
    const homepageSource = readFileSync(
      join(process.cwd(), "app/[locale]/page.tsx"),
      "utf8"
    )
    const headerSource = readFileSync(
      join(process.cwd(), "components/marketing/site-header.tsx"),
      "utf8"
    )

    expect(homepageSource).toContain("<DetectedDownloadButton")
    expect(headerSource).toContain("<DetectedDownloadButton")
    expect(homepageSource).not.toContain("home.hero.primaryAction")
    expect(headerSource).not.toContain("dictionary.header.download")
    expect(headerSource).not.toContain('size="icon-sm"')
  })
})
