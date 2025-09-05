"use client";

import React, { useState, useEffect } from 'react';
import { getDirection } from '../utils/direction';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathLocale = window.location.pathname.split('/')[1];
      const locale = ['en', 'es', 'pt', 'fr', 'bn', 'uz', 'ru', 'he', 'ar', 'ur'].includes(pathLocale) ? pathLocale : 'en';
      setCurrentLocale(locale);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    const path = window.location.pathname.split('/').slice(2).join('/');
    window.location.href = `/${locale}${path ? '/' + path : ''}`;
  };

  const direction = getDirection(currentLocale);
  const isRTL = direction === 'rtl';

  return (
    <form action="" method="get" className={`${isRTL ? 'mr-6' : 'ml-6'}`}>
      <select
        name="locale"
        className={`bg-blue-900 text-white font-bold border border-blue-300 rounded px-2 py-1 ${isRTL ? 'text-right' : 'text-left'}`}
        defaultValue={currentLocale}
        onChange={handleChange}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
        <option value="fr">FR</option>
        <option value="bn">বাংলা</option>
        <option value="uz">O'zbek</option>
        <option value="ru">Русский</option>
        <option value="he">עברית</option>
        <option value="ar">العربية</option>
        <option value="ur">اردو</option>
      </select>
    </form>
  );
}
