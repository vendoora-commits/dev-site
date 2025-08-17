"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/developers-hero.svg" alt="Careers" width={1200} height={400} />
        </div>
        <p className="text-sm uppercase tracking-wide text-blue-600">Careers</p>
        <h1 className="text-5xl font-bold mt-4">
          Build the Future of Operational Services
        </h1>
        <p className="text-xl mt-4">
          Join Vendoora as an employee-owned S-Corp. Ship AI-powered platforms 
          that run on the edge and in the cloud—and share in profits for the first five years.
        </p>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">What You&apos;ll Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">HavenOS</h3>
              <p>
                Guest journey (check-in, keys, real-time bookings, loyalty), 
                staff journey (role-adaptive app + AI co-pilot), 
                operator journey (predictive dashboards, sustainability insights, feature flags).
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">DockOS</h3>
              <p>
                Slip reservations & billing, dock concierge, POS, 
                offline-first P2P sync, vessel mode for onboard analytics and services.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Our Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Edge + Cloud continuity',
              'Supabase/Postgres real-time data & auditable logs',
              'AI (on-device + Apple Intelligence integration)',
              'TypeScript, React/Next.js, Flutter/Swift/Kotlin',
              'Security: E2E encryption, MFA/2FA, regional silos',
              'CI/CD with feature flags and observability',
              'i18n with continuous localization'
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Apple Intelligence & Multilingual Dev Flow</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Real-time translation in coding sessions',
              'Multilingual commit messages / PRs',
              'Privacy-first inference on Apple silicon',
              'CI/CD triggers translation updates automatically'
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Why Join</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Employee-owned from day one: profit-sharing for 5 years',
              'Small teams, high ownership, direct production impact',
              'Privacy by default, accessibility by design, measurable sustainability'
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8">Open Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Founding Full-Stack Engineer (Web/App)',
              'Mobile Engineer (iOS/Android)',
              'Platform Engineer (Edge + Cloud)',
              'Data/ML Engineer (Realtime + On-device)',
              'Frontend/Design Engineer (Design Systems + Accessibility)',
              'Security Engineer (Product & Platform)'
            ].map((role, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{role}</h3>
                <Link 
                  href="/contact"
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </header>
    </div>
  );
}
