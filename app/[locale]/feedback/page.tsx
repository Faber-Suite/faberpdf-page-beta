import type { Metadata } from "next"
import { MessageSquareTextIcon } from "lucide-react"

import { FeedbackForm } from "@/components/feedback/feedback-form"
import { SectionHeading } from "@/components/marketing/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  createLocalizedMetadata,
  getLocaleDictionary,
  type LocalePageProps,
} from "@/lib/i18n-server"
import { buildFeedbackJsonLd, serializeJsonLd } from "@/lib/seo"

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { dictionary, locale } = await getLocaleDictionary(params)

  return createLocalizedMetadata({
    locale,
    metadata: dictionary.feedback.metadata,
    pathname: "/feedback",
  })
}

export default async function FeedbackPage({ params }: LocalePageProps) {
  const { dictionary, locale } = await getLocaleDictionary(params)
  const feedback = dictionary.feedback

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(buildFeedbackJsonLd(locale)),
        }}
      />
      <section className="border-b bg-surface-quiet">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="flex flex-col gap-8">
            <SectionHeading
              title={feedback.title}
              description={feedback.description}
            />

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <MessageSquareTextIcon data-icon="inline-start" />
                {feedback.badges.anonymous}
              </Badge>
              <Badge variant="outline">{feedback.badges.emailOptional}</Badge>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{feedback.tipsTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
                  {feedback.tips.map((tip) => (
                    <li key={tip} className="flex gap-2">
                      <span aria-hidden="true">-</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{feedback.formTitle}</CardTitle>
              <CardDescription>{feedback.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackForm messages={feedback} />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
