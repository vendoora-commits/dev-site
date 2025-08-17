import React from 'react';
import Link from 'next/link';

export default function HavenOSPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-12">
        <p className="text-sm uppercase tracking-wide text-blue-600">HavenOS</p>
        <h1 className="text-5xl font-bold mt-4">
          AI-Powered Operational Services
        </h1>
        <p className="text-xl mt-4">
          One unified suite for guest delight, staff efficiency, and management 
          clarity—built to run online or offline.
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">The Guest Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Contactless check-in',
              'Smart room controls',
              'Personalized recommendations',
              'Loyalty rewards',
              'Every touchpoint is powered by privacy-preserving on-device AI for instant, personal service'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Unified for Staff</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Role-adaptive staff app (butler, concierge, housekeeping, valet)',
              'AI co-pilot for routing and workload balance',
              'Request Help for real-time team support'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Security & Compliance by Design</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'GDPR / CCPA / PIPL',
              'SOC 2 / ISO 27001',
              'Zero persistent guest data on TVs',
              'Auto-wipe + token vault'
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Sustainability by Design</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Energy, water, and waste tracking',
              'Real-time dashboards for managers',
              'QR storytelling for guests'
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
