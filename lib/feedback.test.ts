import { describe, expect, it } from "vitest"

import { buildFormspreePayload, parseFeedbackPayload } from "@/lib/feedback"

describe("parseFeedbackPayload", () => {
  it("normalizes a valid anonymous beta feedback payload", () => {
    const result = parseFeedbackPayload({
      appVersion: " 0.1.0 ",
      category: "bug",
      email: " user@example.com ",
      message: " The text selection handle jumps after zooming in. ",
      platform: "windows",
      source: "desktop",
      website: "",
    })

    expect(result).toEqual({
      ok: true,
      spam: false,
      data: {
        appVersion: "0.1.0",
        category: "bug",
        email: "user@example.com",
        message: "The text selection handle jumps after zooming in.",
        platform: "windows",
        source: "desktop",
      },
    })
  })

  it("rejects messages that are too short to be useful", () => {
    const result = parseFeedbackPayload({
      category: "idea",
      message: "Nice",
      platform: "macos",
      source: "web",
    })

    expect(result).toEqual({
      ok: false,
      error: "Please include at least 10 characters of feedback.",
    })
  })

  it("silently marks honeypot submissions as spam", () => {
    const result = parseFeedbackPayload({
      category: "praise",
      message: "The app opens my PDFs quickly.",
      platform: "linux",
      source: "web",
      website: "https://spam.example",
    })

    expect(result).toEqual({
      ok: true,
      spam: true,
      data: null,
    })
  })
})

describe("buildFormspreePayload", () => {
  it("adds product context fields for Formspree email delivery", () => {
    const payload = buildFormspreePayload({
      appVersion: "0.1.0",
      category: "friction",
      email: undefined,
      message: "I could not find where to save a signed copy.",
      platform: "windows",
      source: "desktop",
    })

    expect(payload).toEqual({
      _subject: "FaberPDF feedback: friction",
      appVersion: "0.1.0",
      category: "friction",
      email: "",
      message: "I could not find where to save a signed copy.",
      platform: "windows",
      product: "FaberPDF",
      source: "desktop",
    })
  })
})
