import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { POST } from "@/app/api/feedback/route"

function jsonRequest(body: unknown) {
  return new Request("http://localhost/api/feedback", {
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  })
}

describe("POST /api/feedback", () => {
  const originalFormId = process.env.FORMSPREE_FORM_ID

  beforeEach(() => {
    vi.restoreAllMocks()
    process.env.FORMSPREE_FORM_ID = "test"
  })

  afterEach(() => {
    process.env.FORMSPREE_FORM_ID = originalFormId
    vi.restoreAllMocks()
  })

  it("returns a configuration error when Formspree is not configured", async () => {
    delete process.env.FORMSPREE_FORM_ID

    const response = await POST(
      jsonRequest({
        category: "bug",
        message: "The save dialog did not open after editing text.",
        platform: "windows",
        source: "web",
      })
    )

    expect(response.status).toBe(503)
    await expect(response.json()).resolves.toEqual({
      error: "Feedback delivery is not configured yet.",
    })
  })

  it("returns validation errors before forwarding", async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      jsonRequest({
        category: "idea",
        message: "Tiny",
        platform: "linux",
        source: "web",
      })
    )

    expect(response.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
    await expect(response.json()).resolves.toEqual({
      error: "Please include at least 10 characters of feedback.",
    })
  })

  it("silently accepts honeypot spam without forwarding it", async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      jsonRequest({
        category: "praise",
        message: "This is clearly a bot submission.",
        platform: "other",
        source: "web",
        website: "https://spam.example",
      })
    )

    expect(response.status).toBe(200)
    expect(fetchMock).not.toHaveBeenCalled()
    await expect(response.json()).resolves.toEqual({ ok: true })
  })

  it("forwards valid feedback to Formspree using the configured form id", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        headers: { "content-type": "application/json" },
        status: 200,
      })
    )
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      jsonRequest({
        appVersion: "0.1.0",
        category: "friction",
        email: "tester@example.com",
        message: "I could not find the button for exporting a signed PDF.",
        platform: "macos",
        source: "desktop",
      })
    )

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/test",
      expect.objectContaining({
        body: JSON.stringify({
          _subject: "FaberPDF feedback: friction",
          appVersion: "0.1.0",
          category: "friction",
          email: "tester@example.com",
          message: "I could not find the button for exporting a signed PDF.",
          platform: "macos",
          product: "FaberPDF",
          source: "desktop",
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      })
    )
    await expect(response.json()).resolves.toEqual({ ok: true })
  })
})
