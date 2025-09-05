'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMessages, useLocale } from 'next-intl';
import { getDirection } from '../../../utils/direction';
import { BuildingOffice2Icon, UserIcon, UsersIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function HavenOSPage() {
  const messages = useMessages();
  const locale = useLocale();
  const direction = getDirection(locale);
  const isRTL = direction === 'rtl';

  return (
    <div className={`min-h-screen bg-white text-black ${isRTL ? 'rtl' : 'ltr'}`}>
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/HavanOS_Hero.png" alt="HavenOS Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <div className={`flex items-center gap-2 mb-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <BuildingOffice2Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <p className={`text-sm uppercase tracking-wide text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOS']}</p>
        </div>
        <h1 className={`text-5xl font-bold mt-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSTitle']}</h1>
        <p className={`text-xl mt-4 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSSubtitle']}</p>

        {/* More Substance: Features & Use Cases */}
        <section className="mt-16">
          <h2 className={`text-3xl font-bold mb-6 text-blue-900 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSWhyChoose']}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSPrivacyFirst']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['HavenOSPrivacyFirstDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSSustainability']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['HavenOSSustainabilityDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSCompliance']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['HavenOSComplianceDesc']}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className={`text-xl font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSStaffExperience']}</h3>
              <p className={isRTL ? 'text-right' : 'text-left'}>{messages['HavenOSStaffExperienceDesc']}</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className={`flex items-center gap-2 mb-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <UserIcon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            <h2 className={`text-3xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSGuestExperience']}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              messages['HavenOSGuestFeature1'],
              messages['HavenOSGuestFeature2'],
              messages['HavenOSGuestFeature3'],
              messages['HavenOSGuestFeature4'],
              messages['HavenOSGuestFeature5']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className={`flex items-center gap-2 mb-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <UsersIcon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            <h2 className={`text-3xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSUnifiedStaff']}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              messages['HavenOSStaffFeature1'],
              messages['HavenOSStaffFeature2'],
              messages['HavenOSStaffFeature3']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className={`flex items-center gap-2 mb-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <ShieldCheckIcon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            <h2 className={`text-3xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSSecurityCompliance']}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              messages['HavenOSSecurityFeature1'],
              messages['HavenOSSecurityFeature2'],
              messages['HavenOSSecurityFeature3'],
              messages['HavenOSSecurityFeature4']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className={`flex items-center gap-2 mb-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <SparklesIcon className="h-7 w-7 text-green-600" aria-hidden="true" />
            <h2 className={`text-3xl font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>{messages['HavenOSSustainabilityTitle']}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              messages['HavenOSSustainabilityFeature1'],
              messages['HavenOSSustainabilityFeature2'],
              messages['HavenOSSustainabilityFeature3']
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p className={isRTL ? 'text-right' : 'text-left'}>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={`mt-16 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <Link 
            href="/developers" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {messages['HavenOSJoinTeam']}
          </Link>
        </div>
      </header>
    </div>
  );
}
