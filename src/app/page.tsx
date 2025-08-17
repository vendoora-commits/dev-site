import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* HERO SECTION */}
      <header className="container mx-auto px-4 py-16">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/88E069A5-9563-4D82-800D-00E7705B76C7.png" alt="HavenOS Hero" width={1600} height={600} priority />
        </div>
        <h1 className="text-6xl font-extrabold text-blue-900 mb-6">Vendoora</h1>
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Enterprise AI for Hospitality & Maritime</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl">
          Vendoora delivers unified, privacy-first operational services for hotels, marinas, and resorts. Our platforms—HavenOS and DockOS—empower teams, delight guests, and drive sustainable growth with edge + cloud AI.
        </p>
      </header>

      {/* HAVENOS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">HavenOS</h2>
            <p className="text-lg text-gray-700 mb-6">
              HavenOS is the AI-powered platform for hospitality operations. It streamlines guest check-in, smart room controls, loyalty rewards, and staff workflows—all with privacy-preserving, on-device AI. Sustainability and compliance are built in, with dashboards for managers and QR storytelling for guests.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-6">
              <li>Contactless check-in & smart room controls</li>
              <li>Role-adaptive staff app + AI co-pilot</li>
              <li>Predictive dashboards for operators</li>
              <li>GDPR, SOC 2, ISO 27001 compliance</li>
              <li>Energy, water, and waste tracking</li>
            </ul>
            <Link href="/havenos" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">Explore HavenOS</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/0DB5CE95-F761-48B3-93D1-81631EC0B911.png" alt="HavenOS" width={400} height={200} className="rounded shadow" />
          </div>
        </div>
      </section>

      {/* DOCKOS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">DockOS</h2>
            <p className="text-lg text-gray-700 mb-6">
              DockOS is the AI-driven platform for marinas. It simplifies slip reservations, dock concierge, guest loyalty, and vessel analytics. Offline-first P2P sync ensures resilience, while PCI-ready payments and end-to-end encryption keep data secure.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-6">
              <li>Slip reservations & billing</li>
              <li>Dock concierge & bookings</li>
              <li>Guest loyalty & marina marketplace</li>
              <li>Edge resilience (offline-ready)</li>
              <li>PCI-ready payments & encryption</li>
            </ul>
            <Link href="/dockos" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">Explore DockOS</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/2CA64176-178A-4381-82DB-083B68138C8A.png" alt="DockOS" width={400} height={200} className="rounded shadow" />
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-blue-50 p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Careers at Vendoora</h2>
          <p className="text-lg mb-4 text-gray-700">Employee-owned S-Corp. Profit-sharing for the first five years. Join a team building the future of operational services with AI-native, edge + cloud, and global i18n.</p>
          <Link href="/developers" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">View Open Roles</Link>
        </div>
      </section>
    </div>
  );
}
