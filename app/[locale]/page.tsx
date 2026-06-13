import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckIcon,
  MessageSquareTextIcon,
} from "lucide-react"

import { DetectedDownloadButton } from "@/components/download/detected-download-button"
import screenshotEditor from "@/faber_assets/opened_pdf.png"
import { ProductWorkspace } from "@/components/marketing/product-workspace"
import { SectionHeading } from "@/components/marketing/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getLocaleDictionary, type LocalePageProps } from "@/lib/i18n-server"
import { localizePath } from "@/lib/i18n-routing"
import { downloadItems } from "@/lib/site"

export default async function Page({ params }: LocalePageProps) {
  const { dictionary, locale } = await getLocaleDictionary(params)
  const home = dictionary.home

  return (
    <main id="top" className="bg-background">
      <section className="relative isolate min-h-[84svh] overflow-hidden border-b bg-surface-quiet md:min-h-[88svh]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src={screenshotEditor}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-right-bottom opacity-30"
          />
          <div className="bg-hero-scrim absolute inset-0" />
        </div>

        <div className="relative mx-auto flex min-h-[84svh] w-full max-w-7xl flex-col justify-start gap-10 px-4 pt-20 pb-10 md:min-h-[88svh] md:justify-center md:px-6 md:py-20">
          <div className="flex max-w-3xl flex-col gap-7">
            <div className="flex flex-wrap gap-2">
              <Badge>
                <CheckIcon data-icon="inline-start" />
                {home.hero.badge}
              </Badge>
              <Badge variant="secondary">{home.hero.secondaryBadge}</Badge>
              <Badge variant="outline">{home.hero.versionBadge}</Badge>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-heading text-4xl font-medium tracking-normal text-balance sm:text-6xl lg:text-7xl">
                {home.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-pretty text-muted-foreground sm:text-xl sm:leading-9">
                {home.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <DetectedDownloadButton
                downloads={downloadItems}
                messages={dictionary.download}
                size="lg"
                className="w-full sm:w-fit sm:min-w-48"
              />
              <Button
                variant="outline"
                size="lg"
                render={<Link href={localizePath(locale, "/feedback")} />}
                nativeButton={false}
                className="w-full sm:w-fit sm:min-w-44"
              >
                {home.hero.secondaryAction}
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <SectionHeading
            eyebrow={home.sections.featuresEyebrow}
            title={home.sections.featuresTitle}
            description={home.sections.featuresDescription}
          />

          <div className="grid gap-4">
            {home.featurePillars.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground [&_svg]:size-5">
                      <feature.icon />
                    </span>
                    <div className="flex flex-col gap-1">
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-surface-warm">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 md:px-6 md:py-20 lg:py-24">
          <SectionHeading
            align="center"
            eyebrow={home.sections.screenshotsEyebrow}
            title={home.sections.screenshotsTitle}
            description={home.sections.screenshotsDescription}
          />
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <ProductWorkspace labels={dictionary.productWorkspace} />
            <ProductWorkspace
              labels={dictionary.productWorkspace}
              variant="welcome"
            />
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:py-24">
          <SectionHeading
            eyebrow={home.sections.previewEyebrow}
            title={home.sections.previewTitle}
            description={home.sections.previewDescription}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {home.previewCards.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground [&_svg]:size-5">
                    <item.icon />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow={home.sections.feedbackEyebrow}
              title={home.sections.feedbackTitle}
              description={home.sections.feedbackDescription}
            />

            <Button
              render={<Link href={localizePath(locale, "/feedback")} />}
              nativeButton={false}
              size="lg"
              className="w-full sm:w-fit"
            >
              <MessageSquareTextIcon data-icon="inline-start" />
              {home.feedbackCta}
            </Button>
          </div>

          <div className="grid content-start gap-3">
            {home.feedbackTips.map((tip) => (
              <div key={tip.title} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background [&_svg]:size-4">
                  <tip.icon />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium">{tip.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-surface-warm">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <SectionHeading
            eyebrow={home.sections.trustEyebrow}
            title={home.sections.trustTitle}
            description={home.sections.trustDescription}
          />

          <div className="grid content-start gap-4">
            <div className="flex flex-wrap gap-2">
              {home.trustPoints.map((point) => (
                <Badge key={point} variant="secondary">
                  <CheckIcon data-icon="inline-start" />
                  {point}
                </Badge>
              ))}
            </div>

            <Separator />

            {home.legalNotes.map((note) => (
              <Card key={note.title}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground [&_svg]:size-5">
                      <note.icon />
                    </span>
                    <div className="flex flex-col gap-1">
                      <CardTitle>{note.title}</CardTitle>
                      <CardDescription>{note.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <SectionHeading
            eyebrow={home.sections.faqEyebrow}
            title={home.sections.faqTitle}
            description={home.sections.faqDescription}
          />

          <Accordion defaultValue={["item-0"]}>
            {home.faqItems.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}
