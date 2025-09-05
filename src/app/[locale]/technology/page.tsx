'use client';

import Image from 'next/image';
import { useMessages, useLocale } from 'next-intl';
import { getDirection } from '../../../utils/direction';

export default function TechnologyPage() {
  const messages = useMessages();
  const locale = useLocale();
  const direction = getDirection(locale);
  const isRTL = direction === 'rtl';

  return (
    <div className={`min-h-screen bg-white text-black ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/Technology_Hero.png" alt="Technology Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>

        <p className={`text-sm uppercase tracking-wide text-blue-600 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['Technology']}</p>
        <h1 className={`text-5xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyTitle']}</h1>
        <p className={`text-xl mb-10 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologySubtitle']}</p>

        {/* Responsive Gallery Section */}
        <section className="mb-12">
          <h2 className={`text-2xl font-semibold mb-6 text-blue-900 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyHighlights']}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Edge_Node.png" alt="Edge Node" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className={`mt-2 text-base text-gray-800 font-medium text-center ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyEdgeNode']}</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Cloud_Sync.png" alt="Cloud Sync" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className={`mt-2 text-base text-gray-800 font-medium text-center ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyCloudSync']}</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Security.png" alt="Security" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className={`mt-2 text-base text-gray-800 font-medium text-center ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologySecurity']}</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Compliance.png" alt="Compliance" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className={`mt-2 text-base text-gray-800 font-medium text-center ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyCompliance']}</span>
            </div>
          </div>
        </section>

        {/* More Substance: Tech Stack & How It Works */}
        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyOurStack']}</h2>
          <ul className={`list-disc space-y-1 text-gray-700 ${isRTL ? 'mr-6' : 'ml-6'}`}>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack1']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack2']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack3']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack4']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack5']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack6']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack7']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyStack8']}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyHowItWorks']}</h2>
          <p className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyHowItWorksDesc']}</p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyCoreStack']}</h2>
          <ul className={`list-disc space-y-1 ${isRTL ? 'mr-6' : 'ml-6'}`}>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyCoreStack1']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyCoreStack2']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyCoreStack3']}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyAppleIntel']}</h2>
          <p className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyAppleIntelDesc']}</p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologyI18n']}</h2>
          <p className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologyI18nDesc']}</p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['TechnologySecurityCompliance']}</h2>
          <ul className={`list-disc space-y-1 ${isRTL ? 'mr-6' : 'ml-6'}`}>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologySecurity1']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologySecurity2']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologySecurity3']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologySecurity4']}</li>
            <li className={isRTL ? 'text-right' : 'text-left'}>{messages['TechnologySecurity5']}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
