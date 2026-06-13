import { describe, expect, test } from "vitest"
import { readFileSync } from "node:fs"
import { join } from "node:path"

import { getDictionary, locales } from "@/lib/i18n"

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value]
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectStrings)
  }

  if (typeof value === "object" && value !== null) {
    return Object.values(value).flatMap(collectStrings)
  }

  return []
}

describe("public website copy", () => {
  test("does not mention accounts or checkouts", () => {
    const bannedCopyPattern =
      /\b(accounts?|checkouts?|sign-?ins?|logins?)\b|\bnalog(a|om|u)?\b|\bprijav(a|u|e|om)?\b|налог(а|ом|у)?|пријав(а|у|е|ом)?/i

    const strings = locales.flatMap((locale) =>
      collectStrings(getDictionary(locale))
    )

    expect(strings.filter((text) => bannedCopyPattern.test(text))).toEqual([])
  })

  test("public pickers use shadcn dropdown components", () => {
    const componentSources = [
      "components/marketing/language-switcher.tsx",
      "components/download/detected-download.tsx",
      "components/feedback/feedback-form.tsx",
    ].map((filePath) => readFileSync(join(process.cwd(), filePath), "utf8"))

    const source = componentSources.join("\n")

    expect(source).toContain("@/components/ui/dropdown-menu")
    expect(source).toContain("@/components/ui/select")
    expect(source).not.toContain("@/components/ui/native-select")
  })

  test("site header exposes a localized theme toggle", () => {
    const dictionaries = locales.map((locale) => getDictionary(locale))
    const siteHeaderSource = readFileSync(
      join(process.cwd(), "components/marketing/site-header.tsx"),
      "utf8"
    )

    expect(
      dictionaries.map((dictionary) => dictionary.header.toggleTheme)
    ).toEqual(["Toggle theme", "Promeni temu", "Промени тему", "Promijeni temu"])
    expect(siteHeaderSource).toContain("<ThemeToggle")
  })
})
