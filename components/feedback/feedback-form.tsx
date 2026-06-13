"use client"

import * as React from "react"
import {
  CheckCircle2Icon,
  MessageSquareTextIcon,
  SendIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { FeedbackCategory, FeedbackPlatform } from "@/lib/feedback"
import type { Dictionary } from "@/lib/i18n"

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string }

type FeedbackFormProps = {
  messages: Dictionary["feedback"]
}

const categoryValues: FeedbackCategory[] = ["bug", "friction", "idea", "praise"]

const platformValues: FeedbackPlatform[] = [
  "windows",
  "macos",
  "linux",
  "other",
]

export function FeedbackForm({ messages }: FeedbackFormProps) {
  const formMessages = messages.form
  const platformItems = platformValues.map((value) => ({
    label: formMessages.platforms[value],
    value,
  }))
  const [category, setCategory] = React.useState<FeedbackCategory>("idea")
  const [platform, setPlatform] = React.useState<FeedbackPlatform>("other")
  const [state, setState] = React.useState<SubmitState>({
    status: "idle",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState({ status: "idle", message: "" })

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      appVersion: formData.get("appVersion"),
      category,
      email: formData.get("email"),
      message: formData.get("message"),
      platform,
      source: "web",
      website: formData.get("website"),
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/feedback", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })

      if (!response.ok) {
        setState({
          status: "error",
          message: formMessages.errorDescription,
        })
        return
      }

      form.reset()
      setCategory("idea")
      setPlatform("other")
      setState({
        status: "success",
        message: formMessages.successDescription,
      })
    } catch {
      setState({
        status: "error",
        message: formMessages.errorDescription,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        name="website"
        type="text"
      />

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">
          <MessageSquareTextIcon data-icon="inline-start" />
          {messages.badges.anonymous}
        </Badge>
        <Badge variant="outline">{messages.badges.emailOptional}</Badge>
      </div>

      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            {formMessages.categoryLabel}
          </FieldLegend>
          <FieldDescription>
            {formMessages.categoryDescription}
          </FieldDescription>
          <ToggleGroup
            value={[category]}
            spacing={2}
            className="flex-wrap"
            onValueChange={(value) => {
              const nextCategory = value[0] as FeedbackCategory | undefined

              if (nextCategory) {
                setCategory(nextCategory)
              }
            }}
          >
            {categoryValues.map((value) => (
              <ToggleGroupItem key={value} value={value}>
                {formMessages.categories[value]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </FieldSet>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="feedback-platform">
              {formMessages.platformLabel}
            </FieldLabel>
            <Select
              items={platformItems}
              value={platform}
              onValueChange={(value) => setPlatform(value as FeedbackPlatform)}
            >
              <SelectTrigger id="feedback-platform" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false}>
                <SelectGroup>
                  {platformItems.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="feedback-version">
              {formMessages.versionLabel}
            </FieldLabel>
            <Input
              id="feedback-version"
              name="appVersion"
              placeholder={formMessages.versionPlaceholder}
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="feedback-message">
            {formMessages.messageLabel}
          </FieldLabel>
          <Textarea
            id="feedback-message"
            name="message"
            minLength={10}
            maxLength={5000}
            required
            rows={7}
            placeholder={formMessages.messagePlaceholder}
          />
          <FieldDescription>{formMessages.messageDescription}</FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="feedback-email">
            {formMessages.emailLabel}
          </FieldLabel>
          <Input
            id="feedback-email"
            name="email"
            type="email"
            placeholder={formMessages.emailPlaceholder}
          />
          <FieldDescription>{formMessages.emailDescription}</FieldDescription>
        </Field>
      </FieldGroup>

      {state.status === "success" ? (
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{formMessages.successTitle}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}

      {state.status === "error" ? (
        <Alert variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>{formMessages.errorTitle}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      ) : null}

      <FieldError aria-live="polite">
        {isSubmitting ? formMessages.submittingDescription : null}
      </FieldError>

      <Button
        type="submit"
        size="lg"
        className="w-fit min-w-40"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Spinner data-icon="inline-start" />
        ) : (
          <SendIcon data-icon="inline-start" />
        )}
        {isSubmitting ? formMessages.submitting : formMessages.submit}
      </Button>
    </form>
  )
}
