import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DockOS | Vendoora',
  description: 'AI-driven operational services for marinas. Slip reservations, dock concierge, guest loyalty, and vessel analytics.',
  openGraph: {
    title: 'DockOS | Vendoora',
    description: 'AI-driven operational services for marinas. Slip reservations, dock concierge, guest loyalty, and vessel analytics.',
    images: ['/images/2CA64176-178A-4381-82DB-083B68138C8A.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DockOS | Vendoora',
    description: 'AI-driven operational services for marinas. Slip reservations, dock concierge, guest loyalty, and vessel analytics.',
    images: ['/images/2CA64176-178A-4381-82DB-083B68138C8A.png'],
  },
};

export default function DockOSPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/2CA64176-178A-4381-82DB-083B68138C8A.png" alt="DockOS Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <p className="text-sm uppercase tracking-wide text-blue-600">DockOS</p>
        <h1 className="text-5xl font-bold mt-4">AI-Driven Operational Services for Marinas</h1>
        <p className="text-xl mt-4">Marina operations, reimagined—P2P/edge resilience, guest-grade experiences, and compliant payments from dock to deck.</p>

        {/* More Substance: Features & Use Cases */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Choose DockOS?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Offline-First Resilience</h3>
              <p>Edge-ready, encrypted peer-to-peer sync keeps operations running even when the cloud is down.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">PCI-Ready Payments</h3>
              <p>Compliant, secure payments from dock to deck. End-to-end encryption for shore and vessel.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Live Operations</h3>
              <p>Real-time slip assignments, alerts, and vessel analytics. Predictive maintenance and AI-supported navigation.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Marketplace & Loyalty</h3>
              <p>Guest loyalty programs and marina marketplace for new revenue streams.</p>
            </div>
          </div>
        </section>

        {/* Advanced Next.js Features: Loading State Example */}
        {/* <Suspense fallback={<div>Loading...</div>}> ...future dynamic content... </Suspense> */}

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Marina Management Simplified</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Slip reservations & billing',
              'Dock concierge & bookings',
              'Guest loyalty & marina marketplace'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Real-Time Operations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Edge resilience (offline-ready)',
              'Encrypted peer-to-peer sync',
              'Live slip assignments & alerts'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Onboard Vessel Mode</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Real-time vessel analytics',
              'Predictive maintenance',
              'AI-supported navigation'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Security & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'PCI-ready payments',
              'GDPR / ISO 27001 / SOC 2',
              'End-to-end encryption (shore & vessel)'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link 
            href="/developers" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Join Our Team
          </Link>
        </div>
      </header>
    </div>
  );
}
