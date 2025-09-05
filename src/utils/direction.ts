// Utility functions for handling text direction (RTL/LTR)

export const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];

export function isRTL(locale: string): boolean {
  return RTL_LANGUAGES.includes(locale);
}

export function getDirection(locale: string): 'ltr' | 'rtl' {
  return isRTL(locale) ? 'rtl' : 'ltr';
}

export function getOppositeDirection(locale: string): 'ltr' | 'rtl' {
  return isRTL(locale) ? 'ltr' : 'rtl';
}
