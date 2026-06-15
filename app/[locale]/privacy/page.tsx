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
  const document = getLegalDocument(locale, "privacy")

  return createLocalizedMetadata({
    locale,
    metadata: document.metadata,
    pathname: "/privacy",
  })
}

export default async function PrivacyPage({ params }: LocalePageProps) {
  const { locale } = await getLocaleDictionary(params)
  const document = getLegalDocument(locale, "privacy")

  return <LegalDocumentPage document={document} />
}
