export type FeedbackCategory = "bug" | "idea" | "friction" | "praise"
export type FeedbackPlatform = "windows" | "macos" | "linux" | "other"
export type FeedbackSource = "web" | "desktop"

export type FeedbackSubmission = {
  appVersion?: string
  category: FeedbackCategory
  email?: string
  message: string
  platform: FeedbackPlatform
  source: FeedbackSource
}

export type FeedbackParseResult =
  | {
      ok: true
      spam: false
      data: FeedbackSubmission
    }
  | {
      ok: true
      spam: true
      data: null
    }
  | {
      ok: false
      error: string
    }

const categories = new Set<FeedbackCategory>([
  "bug",
  "idea",
  "friction",
  "praise",
])

const platforms = new Set<FeedbackPlatform>([
  "windows",
  "macos",
  "linux",
  "other",
])

const sources = new Set<FeedbackSource>(["web", "desktop"])

function getRecord(input: unknown): Record<string, unknown> | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return null
  }

  return input as Record<string, unknown>
}

function cleanString(value: unknown) {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim()
}

function optionalString(value: unknown) {
  const cleaned = cleanString(value)
  return cleaned ? cleaned : undefined
}

function getCategory(value: unknown): FeedbackCategory {
  const cleaned = cleanString(value)

  if (categories.has(cleaned as FeedbackCategory)) {
    return cleaned as FeedbackCategory
  }

  return "idea"
}

function getPlatform(value: unknown): FeedbackPlatform {
  const cleaned = cleanString(value)

  if (platforms.has(cleaned as FeedbackPlatform)) {
    return cleaned as FeedbackPlatform
  }

  return "other"
}

function getSource(value: unknown): FeedbackSource {
  const cleaned = cleanString(value)

  if (sources.has(cleaned as FeedbackSource)) {
    return cleaned as FeedbackSource
  }

  return "web"
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function parseFeedbackPayload(input: unknown): FeedbackParseResult {
  const payload = getRecord(input)

  if (!payload) {
    return {
      ok: false,
      error: "Feedback payload must be an object.",
    }
  }

  if (optionalString(payload.website)) {
    return {
      ok: true,
      spam: true,
      data: null,
    }
  }

  const message = cleanString(payload.message)

  if (message.length < 10) {
    return {
      ok: false,
      error: "Please include at least 10 characters of feedback.",
    }
  }

  if (message.length > 5000) {
    return {
      ok: false,
      error: "Please keep feedback under 5000 characters.",
    }
  }

  const email = optionalString(payload.email)

  if (email && !isValidEmail(email)) {
    return {
      ok: false,
      error: "Please enter a valid reply email or leave it blank.",
    }
  }

  return {
    ok: true,
    spam: false,
    data: {
      appVersion: optionalString(payload.appVersion),
      category: getCategory(payload.category),
      email,
      message,
      platform: getPlatform(payload.platform),
      source: getSource(payload.source),
    },
  }
}

export function buildFormspreePayload(feedback: FeedbackSubmission) {
  return {
    _subject: `FaberPDF feedback: ${feedback.category}`,
    appVersion: feedback.appVersion ?? "",
    category: feedback.category,
    email: feedback.email ?? "",
    message: feedback.message,
    platform: feedback.platform,
    product: "FaberPDF",
    source: feedback.source,
  }
}
