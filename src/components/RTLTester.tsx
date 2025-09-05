'use client';

import React, { useState } from 'react';
import { getDirection } from '../utils/direction';

export default function RTLTester() {
  const [selectedLocale, setSelectedLocale] = useState('en');
  const direction = getDirection(selectedLocale);
  const isRTL = direction === 'rtl';

  const locales = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'es', name: 'Spanish', native: 'Español' },
    { code: 'pt', name: 'Portuguese', native: 'Português' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা' },
    { code: 'uz', name: 'Uzbek', native: 'O\'zbek' },
    { code: 'ru', name: 'Russian', native: 'Русский' },
    { code: 'he', name: 'Hebrew', native: 'עברית' },
    { code: 'ar', name: 'Arabic', native: 'العربية' },
    { code: 'ur', name: 'Urdu', native: 'اردو' }
  ];

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 text-blue-900 ${isRTL ? 'text-right' : 'text-left'}`}>
          RTL/LTR Compatibility Tester
        </h1>

        {/* Language Selector */}
        <div className={`mb-8 p-6 bg-white rounded-lg shadow ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            Language Selection
          </h2>
          <div className="flex gap-4 flex-wrap">
            {locales.map((locale) => (
              <button
                key={locale.code}
                onClick={() => setSelectedLocale(locale.code)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedLocale === locale.code
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {locale.native} ({locale.code})
              </button>
            ))}
          </div>
          <p className={`mt-4 text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
            Current direction: <strong>{direction.toUpperCase()}</strong>
          </p>
        </div>

        {/* Navigation Test */}
        <div className={`mb-8 p-6 bg-white rounded-lg shadow ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            Navigation Test
          </h2>
          <nav className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-4 mb-4`}>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Home</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">About</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Services</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Contact</a>
          </nav>
          <div className={`${isRTL ? 'mr-6 pr-6 border-r' : 'ml-6 pl-6 border-l'} border-gray-300`}>
            <p className="text-gray-600">Language switcher should be on the correct side</p>
          </div>
        </div>

        {/* Layout Test */}
        <div className={`mb-8 p-6 bg-white rounded-lg shadow ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            Layout Test
          </h2>
          <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-8 items-center`}>
            <div className="flex-1">
              <h3 className={`text-xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                Content Section
              </h3>
              <p className={`text-gray-700 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                This content should be properly aligned based on the selected language direction.
                In RTL languages, text should be right-aligned and the layout should be mirrored.
              </p>
              <ul className={`list-disc text-gray-700 ${isRTL ? 'mr-6' : 'ml-6'}`}>
                <li>List items should be properly indented</li>
                <li>Bullet points should be on the correct side</li>
                <li>Text alignment should match the language direction</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Test */}
        <div className={`mb-8 p-6 bg-white rounded-lg shadow ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            Form Test
          </h2>
          <form className="space-y-4">
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                Name
              </label>
              <input
                type="text"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
                placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                Email
              </label>
              <input
                type="email"
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? 'text-right' : 'text-left'}`}
                placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className={`${isRTL ? 'ml-2' : 'mr-2'}`}
              />
              <label htmlFor="terms" className={`text-sm text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Spacing Test */}
        <div className={`mb-8 p-6 bg-white rounded-lg shadow ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            Spacing Test
          </h2>
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`${isRTL ? 'mr-4' : 'ml-4'} bg-blue-100 p-4 rounded`}>
              <p>This element has {isRTL ? 'right' : 'left'} margin</p>
            </div>
            <div className={`${isRTL ? 'pr-4' : 'pl-4'} bg-green-100 p-4 rounded`}>
              <p>This element has {isRTL ? 'right' : 'left'} padding</p>
            </div>
            <div className={`${isRTL ? 'border-r-4 border-r-blue-500' : 'border-l-4 border-l-blue-500'} bg-yellow-100 p-4 rounded`}>
              <p>This element has {isRTL ? 'right' : 'left'} border</p>
            </div>
          </div>
        </div>

        {/* Test Results */}
        <div className={`p-6 bg-white rounded-lg shadow ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            Test Results
          </h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${isRTL ? 'ml-2 mr-0' : ''} ${isRTL ? 'bg-green-500' : 'bg-green-500'}`}></span>
              <span className="text-gray-700">Direction: {direction.toUpperCase()}</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${isRTL ? 'ml-2 mr-0' : ''} ${isRTL ? 'bg-green-500' : 'bg-green-500'}`}></span>
              <span className="text-gray-700">Text alignment: {isRTL ? 'Right' : 'Left'}</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${isRTL ? 'ml-2 mr-0' : ''} ${isRTL ? 'bg-green-500' : 'bg-green-500'}`}></span>
              <span className="text-gray-700">Layout mirroring: {isRTL ? 'Enabled' : 'Disabled'}</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${isRTL ? 'ml-2 mr-0' : ''} ${isRTL ? 'bg-green-500' : 'bg-green-500'}`}></span>
              <span className="text-gray-700">Form elements: {isRTL ? 'RTL aligned' : 'LTR aligned'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
