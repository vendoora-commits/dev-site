"use client";

import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { getDirection } from '../utils/direction';

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    
    // Remove current locale from path if it exists
    const pathWithoutLocale = pathname.replace(/^\/(en|es|pt|fr|bn|uz|ru|he|ar|ur|de|sv|fi|nl|ng|sw)/, '') || '/';
    
    // Navigate to new locale using Next.js router for smoother navigation
    router.push(`/${locale}${pathWithoutLocale}`);
  };

  const direction = getDirection(currentLocale);
  const isRTL = direction === 'rtl';

  return (
    <form action="" method="get" className={`${isRTL ? 'mr-6' : 'ml-6'}`}>
      <select
        name="locale"
        className={`bg-blue-900 text-white font-bold border border-blue-300 rounded px-2 py-1 ${isRTL ? 'text-right' : 'text-left'}`}
        value={currentLocale}
        onChange={handleChange}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
        <option value="fr">FR</option>
        <option value="bn">বাংলা</option>
        <option value="uz">O&apos;zbek</option>
        <option value="ru">Русский</option>
        <option value="he">עברית</option>
        <option value="ar">العربية</option>
        <option value="ur">اردو</option>
        <option value="de">DE</option>
        <option value="sv">SV</option>
        <option value="fi">FI</option>
        <option value="nl">NL</option>
        <option value="ng">NG</option>
        <option value="sw">SW</option>
      </select>
    </form>
  );
}
