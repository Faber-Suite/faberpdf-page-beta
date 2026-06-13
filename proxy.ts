import { NextResponse, type NextRequest } from "next/server"

import {
  defaultLocale,
  getLocaleFromPathname,
  getPathWithoutLocale,
} from "@/lib/i18n-routing"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const locale = getLocaleFromPathname(pathname)

  if (locale === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = getPathWithoutLocale(pathname)

    return NextResponse.redirect(url)
  }

  if (!locale) {
    const url = request.nextUrl.clone()
    url.pathname =
      pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`

    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
}
