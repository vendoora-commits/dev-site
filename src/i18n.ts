import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, fall back to default locale instead of calling notFound()
  const validLocale = locale && locales.includes(locale as (typeof locales)[number]) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
