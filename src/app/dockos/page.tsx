import React from 'react';
import Link from 'next/link';

export default function DockOSPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-12">
        <p className="text-sm uppercase tracking-wide text-blue-600">DockOS</p>
        <h1 className="text-5xl font-bold mt-4">
          AI-Driven Operational Services for Marinas
        </h1>
        <p className="text-xl mt-4">
          Marina operations, reimagined—P2P/edge resilience, guest-grade experiences, 
          and compliant payments from dock to deck.
        </p>

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
