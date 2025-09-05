import { NextRequest, NextResponse } from 'next/server';
import { getLocaleFromDomain } from './src/utils/domain-locale';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const domain = hostname.split(':')[0]; // Remove port if present
  
  // Get the locale for this domain
  const locale = getLocaleFromDomain(domain);
  
  // If the pathname starts with a locale, remove it for domain-based routing
  const pathnameHasLocale = pathname.split('/').some(
    (segment) => ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur'].includes(segment)
  );
  
  if (pathnameHasLocale) {
    // Remove the locale from the pathname
    const pathnameWithoutLocale = pathname.split('/').slice(2).join('/') || '/';
    const url = request.nextUrl.clone();
    url.pathname = pathnameWithoutLocale;
    return NextResponse.redirect(url);
  }
  
  // Add locale-specific headers for better SEO and user experience
  const response = NextResponse.next();
  response.headers.set('X-Locale', locale);
  response.headers.set('X-Domain', domain);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
