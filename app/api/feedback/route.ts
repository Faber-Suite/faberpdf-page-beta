import { buildFormspreePayload, parseFeedbackPayload } from "@/lib/feedback"

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_FORM_ID

  if (!formId) {
    return Response.json(
      { error: "Feedback delivery is not configured yet." },
      { status: 503 }
    )
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return Response.json(
      { error: "Feedback payload must be valid JSON." },
      { status: 400 }
    )
  }

  const result = parseFeedbackPayload(body)

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: 400 })
  }

  if (result.spam) {
    return Response.json({ ok: true })
  }

  const endpoint = `https://formspree.io/f/${formId}`

  const response = await fetch(endpoint, {
    body: JSON.stringify(buildFormspreePayload(result.data)),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    method: "POST",
  })

  if (!response.ok) {
    return Response.json(
      { error: "Feedback could not be delivered right now." },
      { status: 502 }
    )
  }

  return Response.json({ ok: true })
}
