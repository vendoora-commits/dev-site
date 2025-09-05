import { defineConfig } from 'next-intl/config';

export default defineConfig({
  locales: ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur'],
  defaultLocale: 'en',
  localePrefix: 'never',
  // Enable domain-based locale detection
  domains: [
    {
      domain: 'vendoora.pk',
      defaultLocale: 'ur'
    },
    {
      domain: 'vendoora.us.com',
      defaultLocale: 'en'
    },
    {
      domain: 'vendoora.es',
      defaultLocale: 'es'
    },
    {
      domain: 'vendoora.pt',
      defaultLocale: 'pt'
    },
    {
      domain: 'vendoora.fr',
      defaultLocale: 'fr'
    },
    {
      domain: 'vendoora.bd',
      defaultLocale: 'bn'
    },
    {
      domain: 'vendoora.uz',
      defaultLocale: 'uz'
    },
    {
      domain: 'vendoora.ru',
      defaultLocale: 'ru'
    },
    {
      domain: 'vendoora.il',
      defaultLocale: 'he'
    },
    {
      domain: 'vendoora.sa',
      defaultLocale: 'ar'
    }
    // Add vendoora.com when you own it:
    // {
    //   domain: 'vendoora.com',
    //   defaultLocale: 'en'
    // }
  ]
});
