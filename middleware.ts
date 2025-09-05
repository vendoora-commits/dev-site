import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur', 'de', 'sv', 'fi', 'nl', 'ng', 'sw'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always show locale prefix for consistency
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|bn|en|es|fr|he|pt|ru|ur|uz|de|sv|fi|nl|ng|sw)/:path*']
};