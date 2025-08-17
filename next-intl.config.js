import { defineConfig } from 'next-intl/config';

export default defineConfig({
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'never'
});
