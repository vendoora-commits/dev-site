import { defineConfig } from 'next-intl/config';

export default defineConfig({
  locales: ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});
