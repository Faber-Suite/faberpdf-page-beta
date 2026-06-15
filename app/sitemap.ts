import type { MetadataRoute } from "next"

import {
  getLocalizedSeoAlternates,
  getRouteUrl,
  publicSeoRoutes,
  seoLastModified,
} from "@/lib/seo"
import { locales } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  return publicSeoRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: getRouteUrl(locale, route.pathname),
      lastModified: seoLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: getLocalizedSeoAlternates(route.pathname),
      },
    }))
  )
}
