import { describe, expect, test } from "vitest"

import {
  getLegalDocument,
  getLegalNavigation,
  legalDocumentTypes,
  legalOwner,
} from "@/lib/legal"
import { locales } from "@/lib/i18n-routing"

describe("legal copy", () => {
  test("identifies the product owner and contact address", () => {
    expect(legalOwner.name).toBe("Adnan Crnovršanin")
    expect(legalOwner.email).toBe("office@actaer.com")
  })

  test("provides terms and privacy documents for every locale", () => {
    for (const locale of locales) {
      const navigation = getLegalNavigation(locale)

      expect(navigation.map((item) => item.href)).toEqual([
        "/terms",
        "/privacy",
      ])

      for (const type of legalDocumentTypes) {
        const document = getLegalDocument(locale, type)

        expect(document.owner).toBe(legalOwner.name)
        expect(document.contactEmail).toBe(legalOwner.email)
        expect(document.updatedLabel).toMatch(/2026|2026\./)
        expect(document.sections.length).toBeGreaterThanOrEqual(5)
      }
    }
  })
})
