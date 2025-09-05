import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { getServerLocale } from './utils/domain-locale';

const locales = ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur'];

export default getRequestConfig(async ({ headers }) => {
  // Get locale from domain first, then fallback to 'en'
  const locale = getServerLocale(headers);

  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
