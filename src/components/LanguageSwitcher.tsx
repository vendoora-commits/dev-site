"use client";

import React from 'react';

export default function LanguageSwitcher() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    const path = window.location.pathname.split('/').slice(2).join('/');
    window.location.href = `/${locale}${path ? '/' + path : ''}`;
  };

  return (
    <form action="" method="get" className="ml-6">
      <select
        name="locale"
        className="bg-blue-900 text-white font-bold border border-blue-300 rounded px-2 py-1"
        defaultValue={typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en'}
        onChange={handleChange}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
      </select>
    </form>
  );
}
