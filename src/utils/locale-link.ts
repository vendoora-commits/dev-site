/**
 * Helper function to create locale-aware links
 * Ensures that navigation preserves the current language
 */

export function createLocaleLink(href: string, locale: string): string {
  // Remove leading slash if present
  const cleanHref = href.startsWith('/') ? href.slice(1) : href;
  
  // If href is empty or just '/', return the locale root
  if (!cleanHref || cleanHref === '/') {
    return `/${locale}`;
  }
  
  // Return the full locale-prefixed path
  return `/${locale}/${cleanHref}`;
}

/**
 * Hook to get locale-aware navigation links
 */
export function useLocaleLinks(locale: string) {
  return {
    home: createLocaleLink('/', locale),
    havenos: createLocaleLink('/havenos', locale),
    dockos: createLocaleLink('/dockos', locale),
    technology: createLocaleLink('/technology', locale),
    about: createLocaleLink('/about', locale),
    contact: createLocaleLink('/contact', locale),
    careers: createLocaleLink('/developers', locale),
  };
}
