"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMessages, useLocale } from 'next-intl';
import { getDirection } from '../../../utils/direction';
import { useLocaleLinks } from '../../../utils/locale-link';

export default function DevelopersPage() {
  const messages = useMessages();
  const locale = useLocale();
  const direction = getDirection(locale);
  const isRTL = direction === 'rtl';
  const localeLinks = useLocaleLinks(locale);

  return (
    <div className={`min-h-screen bg-white text-black ${isRTL ? 'rtl' : 'ltr'}`}>
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/Dev-Team-Careers.png" alt="Careers Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <p className={`text-sm uppercase tracking-wide text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['Careers']}</p>
        <h1 className={`text-5xl font-bold mt-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersTitle']}</h1>
        <p className={`text-xl mt-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersSubtitle']}</p>

        {/* More Substance: Why Join Vendoora? */}
        <section className="mt-16">
          <h2 className={`text-3xl font-bold mb-6 text-blue-900 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersWhyJoin']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersEmployeeOwned']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DevelopersEmployeeOwnedDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersAINative']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DevelopersAINativeDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersPrivacy']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DevelopersPrivacyDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersLearning']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DevelopersLearningDesc']}</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersWhatBuild']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSTitle']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>
                {messages['DevelopersHavenOSDesc']}
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSTitle']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>
                {messages['DevelopersDockOSDesc']}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersOurStack']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              messages['DevelopersStack1'],
              messages['DevelopersStack2'],
              messages['DevelopersStack3'],
              messages['DevelopersStack4'],
              messages['DevelopersStack5'],
              messages['DevelopersStack6'],
              messages['DevelopersStack7']
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersAppleIntel']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              messages['DevelopersAppleIntel1'],
              messages['DevelopersAppleIntel2'],
              messages['DevelopersAppleIntel3'],
              messages['DevelopersAppleIntel4']
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersWhyJoinTitle']}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              messages['DevelopersWhyJoin1'],
              messages['DevelopersWhyJoin2'],
              messages['DevelopersWhyJoin3']
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DevelopersOpenRoles']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              messages['DevelopersRole1'],
              messages['DevelopersRole2'],
              messages['DevelopersRole3'],
              messages['DevelopersRole4'],
              messages['DevelopersRole5'],
              messages['DevelopersRole6']
            ].map((role, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{role}</h3>
                <Link 
                  href={localeLinks.contact}
                  className={`mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {messages['DevelopersApplyNow']}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </header>

      <footer className="w-full bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Image src="/images/Full-Market-Potential.png" alt="Full Market Potential" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
      </footer>
    </div>
  );
}
