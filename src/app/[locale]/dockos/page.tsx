'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMessages, useLocale } from 'next-intl';
import { getDirection } from '../../../utils/direction';
import { useLocaleLinks } from '../../../utils/locale-link';

export default function DockOSPage() {
  const messages = useMessages();
  const locale = useLocale();
  const direction = getDirection(locale);
  const isRTL = direction === 'rtl';
  const localeLinks = useLocaleLinks(locale);

  return (
    <div className={`min-h-screen bg-white text-black ${isRTL ? 'rtl' : 'ltr'}`}>
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/DockOS_Admin_UI_Hero.png" alt="DockOS Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <p className={`text-sm uppercase tracking-wide text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOS']}</p>
        <h1 className={`text-5xl font-bold mt-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSTitle']}</h1>
        <p className={`text-xl mt-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSSubtitle']}</p>

        {/* More Substance: Features & Use Cases */}
        <section className="mt-16">
          <h2 className={`text-3xl font-bold mb-6 text-blue-900 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSWhyChoose']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSOfflineFirst']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DockOSOfflineFirstDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSPCIReady']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DockOSPCIReadyDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSLiveOps']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DockOSLiveOpsDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSMarketplace']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['DockOSMarketplaceDesc']}</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSMarinaManagement']}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              messages['DockOSMarinaFeature1'],
              messages['DockOSMarinaFeature2'],
              messages['DockOSMarinaFeature3']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSRealTimeOps']}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              messages['DockOSRealTimeFeature1'],
              messages['DockOSRealTimeFeature2'],
              messages['DockOSRealTimeFeature3']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSVesselMode']}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              messages['DockOSVesselFeature1'],
              messages['DockOSVesselFeature2'],
              messages['DockOSVesselFeature3']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className={`text-3xl font-semibold mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['DockOSSecurityCompliance']}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              messages['DockOSSecurityFeature1'],
              messages['DockOSSecurityFeature2'],
              messages['DockOSSecurityFeature3']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={`mt-16 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <Link 
            href={localeLinks.careers} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {messages['DockOSJoinTeam']}
          </Link>
        </div>
      </header>
    </div>
  );
}
