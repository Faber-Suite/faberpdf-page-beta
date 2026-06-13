import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon, CheckIcon, MessageSquareTextIcon } from "lucide-react"

import { DetectedDownload } from "@/components/download/detected-download"
import { SectionHeading } from "@/components/marketing/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  createLocalizedMetadata,
  getLocaleDictionary,
  type LocalePageProps,
} from "@/lib/i18n-server"
import { localizePath } from "@/lib/i18n-routing"
import { downloadItems } from "@/lib/site"

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { dictionary, locale } = await getLocaleDictionary(params)

  return createLocalizedMetadata({
    locale,
    metadata: dictionary.downloadPage.metadata,
    pathname: "/download",
  })
}

export default async function DownloadPage({ params }: LocalePageProps) {
  const { dictionary, locale } = await getLocaleDictionary(params)
  const page = dictionary.downloadPage

  return (
    <main className="bg-background">
      <section className="border-b bg-surface-quiet">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:py-24">
          <div className="flex max-w-4xl flex-col gap-6">
            <SectionHeading
              eyebrow={page.eyebrow}
              title={page.title}
              description={page.description}
            />

            <div className="flex flex-wrap gap-2">
              {page.badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  <CheckIcon data-icon="inline-start" />
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <DetectedDownload
            downloads={downloadItems}
            messages={dictionary.download}
          />
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
          <SectionHeading
            title={page.cardsTitle}
            description={page.cardsDescription}
          />

          <div className="grid content-start gap-4">
            {page.cards.map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground [&_svg]:size-5">
                      <CheckIcon />
                    </span>
                    <div className="flex flex-col gap-1">
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-14 md:px-6 md:py-20 lg:py-24">
          <SectionHeading
            title={page.feedbackTitle}
            description={page.feedbackDescription}
          />

          <Button
            render={<Link href={localizePath(locale, "/feedback")} />}
            nativeButton={false}
            size="lg"
            className="w-full sm:w-fit"
          >
            <MessageSquareTextIcon data-icon="inline-start" />
            {page.feedbackAction}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </section>
    </main>
  )
}
