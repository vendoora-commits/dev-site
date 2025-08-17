import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/home-hero.svg" alt="Vendoora hero" width={1600} height={600} priority />
        </div>
        <p className="text-sm uppercase tracking-wide text-blue-600">VENDOORA</p>
        <h1 className="text-5xl font-bold mt-4">
          AI-Powered Operations. Human-Centered Results.
        </h1>
        <p className="text-xl mt-4">
          Unified Operational Services across hospitality and maritime. Built for scale, 
          privacy-first, and designed for developers who want to own the future.
        </p>
        
        <div className="flex space-x-4 mt-8">
          <Link 
            href="/havenos" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Explore HavenOS
          </Link>
          <Link 
            href="/dockos" 
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Explore DockOS
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Our Platforms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">HavenOS</h3>
              <p>
                AI-Powered Operational Services for hospitality. Guest journey 
                (check-in, keys, loyalty), staff journey (role-adaptive app + AI co-pilot), 
                operator journey (predictive dashboards, sustainability).
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">DockOS</h3>
              <p>
                AI-Driven Operational Services for marinas. Slip reservations & billing, 
                dock concierge, guest loyalty; offline-first P2P sync across docks and vessels.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Careers</h2>
          <p className="text-lg mb-4">
            Employee-owned S-Corp. Profit-sharing for the first five years.
          </p>
          <p className="text-lg mb-4">
            AI-native stack with edge + cloud, Apple Intelligence, and global i18n.
          </p>
          <Link 
            href="/developers" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Open Roles
          </Link>
        </section>
      </header>
    </div>
  );
}
