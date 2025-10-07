import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur', 'de', 'sv', 'fi', 'nl', 'ng', 'sw'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, fall back to default locale instead of calling notFound()
  const validLocale = locale && locales.includes(locale as (typeof locales)[number]) ? locale : 'en';

  try {
    const messages = (await import(`../messages/${validLocale}.json`)).default;
    
    // Debug logging for deployment issues
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ Loading messages for ${validLocale}:`, Object.keys(messages).length, 'keys');
    }
    
    return {
      locale: validLocale,
      messages
    };
  } catch (error) {
    console.error(`❌ Failed to load messages for ${validLocale}:`, error);
    
    // Fallback to English if locale-specific messages fail to load
    try {
      const fallbackMessages = (await import(`../messages/en.json`)).default;
      console.log(`🔄 Fallback to English messages`);
      return {
        locale: 'en',
        messages: fallbackMessages
      };
    } catch (fallbackError) {
      console.error(`❌ Critical: Failed to load even English messages:`, fallbackError);
      throw fallbackError;
    }
  }
});
