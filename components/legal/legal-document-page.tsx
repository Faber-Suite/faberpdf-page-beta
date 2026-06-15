import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { LegalDocument } from "@/lib/legal"

type LegalDocumentPageProps = {
  document: LegalDocument
}

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  return (
    <main className="bg-background">
      <section className="border-b bg-surface-quiet">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-14 md:px-6 md:py-20 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              {document.eyebrow}
            </p>
            <h1 className="font-heading text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl">
              {document.title}
            </h1>
            <p className="text-base leading-7 text-pretty text-muted-foreground sm:text-lg sm:leading-8">
              {document.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{document.updatedLabel}</Badge>
            <Badge variant="outline">
              {document.ownerLabel}: {document.owner}
            </Badge>
            <Badge variant="outline">
              {document.contactLabel}: {document.contactEmail}
            </Badge>
          </div>
        </div>
      </section>

      <article className="mx-auto flex w-full max-w-4xl flex-col px-4 py-12 md:px-6 md:py-16">
        {document.sections.map((section, index) => (
          <section key={section.title} className="flex flex-col gap-4 py-7">
            {index > 0 ? <Separator /> : null}
            <div className="flex flex-col gap-3 pt-1">
              <h2 className="font-heading text-2xl font-medium tracking-normal">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="flex flex-col gap-2 text-base leading-7 text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden="true">-</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}

        <Separator className="mt-6" />

        <p className="pt-8 text-sm leading-6 text-muted-foreground">
          {document.contactLabel}:{" "}
          <a
            href={`mailto:${document.contactEmail}`}
            className="font-medium text-foreground underline underline-offset-4"
          >
            {document.contactEmail}
          </a>
        </p>
      </article>
    </main>
  )
}
