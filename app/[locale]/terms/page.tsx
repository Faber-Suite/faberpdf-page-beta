import type { Metadata } from "next"

import { LegalDocumentPage } from "@/components/legal/legal-document-page"
import {
  createLocalizedMetadata,
  getLocaleDictionary,
  type LocalePageProps,
} from "@/lib/i18n-server"
import { getLegalDocument } from "@/lib/legal"

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await getLocaleDictionary(params)
  const document = getLegalDocument(locale, "terms")

  return createLocalizedMetadata({
    locale,
    metadata: document.metadata,
    pathname: "/terms",
  })
}

export default async function TermsPage({ params }: LocalePageProps) {
  const { locale } = await getLocaleDictionary(params)
  const document = getLegalDocument(locale, "terms")

  return <LegalDocumentPage document={document} />
}
