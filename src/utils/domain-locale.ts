/**
 * Domain-based locale detection utility
 * Maps domains to their default locales
 */

export const DOMAIN_LOCALE_MAP: Record<string, string> = {
  'vendoora.dev': 'en', // Primary development domain
  'vendoora.pk': 'ur',
  'vendoora.us.com': 'en',
  'vendoora.es': 'es',
  'vendoora.pt': 'pt',
  'vendoora.fr': 'fr',
  'vendoora.bd': 'bn',
  'vendoora.uz': 'uz',
  'vendoora.ru': 'ru',
  'vendoora.il': 'he',
  'vendoora.sa': 'ar',
  'localhost': 'en', // Default for local development
  // Add your actual domain when you get it
  // 'vendoora.com': 'en', // Uncomment when you own this domain
};

/**
 * Get the default locale based on the current domain
 * @param hostname - The hostname to check (optional, defaults to window.location.hostname)
 * @returns The locale code for the domain, or 'en' as fallback
 */
export function getLocaleFromDomain(hostname?: string): string {
  if (typeof window !== 'undefined') {
    const currentHostname = hostname || window.location.hostname;
    return DOMAIN_LOCALE_MAP[currentHostname] || 'en';
  }
  
  // Server-side fallback
  if (hostname) {
    return DOMAIN_LOCALE_MAP[hostname] || 'en';
  }
  
  return 'en';
}

/**
 * Get the default locale for server-side rendering
 * @param headers - Next.js headers object
 * @returns The locale code based on the host header
 */
export function getServerLocale(headers: Headers): string {
  const host = headers.get('host') || '';
  const hostname = host.split(':')[0]; // Remove port if present
  return DOMAIN_LOCALE_MAP[hostname] || 'en';
}

/**
 * Check if a domain should use RTL layout
 * @param hostname - The hostname to check
 * @returns True if the domain should use RTL layout
 */
export function isDomainRTL(hostname?: string): boolean {
  const locale = getLocaleFromDomain(hostname);
  const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];
  return RTL_LANGUAGES.includes(locale);
}
