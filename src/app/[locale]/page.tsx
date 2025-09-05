'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMessages, useLocale } from 'next-intl';
import { getDirection } from '../../utils/direction';

export default function HomePage() {
  const messages = useMessages();
  const locale = useLocale();
  const direction = getDirection(locale);
  const isRTL = direction === 'rtl';

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* HERO SECTION */}
      <header className="container mx-auto px-4 py-16">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/Main_Vendoora_Hero.png" alt="HavenOS Hero" width={1600} height={600} priority />
        </div>
        <h1 className="text-6xl font-extrabold text-blue-900 mb-6">{messages['HeroTitle']}</h1>
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">{messages['HeroSubtitle']}</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl">
          {messages['HeroDescription']}
        </p>
      </header>

      {/* HAVENOS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className={`flex-1 ${isRTL ? 'order-1 md:order-2' : 'order-2 md:order-1'} flex justify-center`}>
            <Image src="/images/Main_HavenOS.png" alt="HavenOS" width={400} height={200} className="rounded shadow" />
          </div>
          <div className={`flex-1 ${isRTL ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
            <h2 className={`text-4xl font-bold text-blue-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSTitle']}</h2>
            <p className={`text-lg text-gray-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {messages['HavenOSDescription']}
            </p>
            <ul className={`list-disc text-gray-700 mb-6 ${isRTL ? 'mr-6' : 'ml-6'}`}>
              <li>{messages['HavenOSFeature1']}</li>
              <li>{messages['HavenOSFeature2']}</li>
              <li>{messages['HavenOSFeature3']}</li>
              <li>{messages['HavenOSFeature4']}</li>
              <li>{messages['HavenOSFeature5']}</li>
            </ul>
            <Link href="/havenos" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">{messages['ExploreHavenOS']}</Link>
          </div>
        </div>
      </section>

      {/* DOCKOS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className={`flex-1 ${isRTL ? 'order-1 md:order-2' : 'order-2 md:order-1'} flex justify-center`}>
            <Image src="/images/Main_DockOS.png" alt="DockOS" width={400} height={200} className="rounded shadow" />
          </div>
          <div className={`flex-1 ${isRTL ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
            <h2 className={`text-4xl font-bold text-blue-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSTitle']}</h2>
            <p className={`text-lg text-gray-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {messages['DockOSDescription']}
            </p>
            <ul className={`list-disc text-gray-700 mb-6 ${isRTL ? 'mr-6' : 'ml-6'}`}>
              <li>{messages['DockOSFeature1']}</li>
              <li>{messages['DockOSFeature2']}</li>
              <li>{messages['DockOSFeature3']}</li>
              <li>{messages['DockOSFeature4']}</li>
              <li>{messages['DockOSFeature5']}</li>
            </ul>
            <Link href="/dockos" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">{messages['ExploreDockOS']}</Link>
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-blue-50 p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">{messages['CareersTitle']}</h2>
          <p className="text-lg mb-4 text-gray-700">{messages['CareersDescription']}</p>
          <Link href="/developers" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">{messages['ViewOpenRoles']}</Link>
        </div>
      </section>
    </div>
  );
}
