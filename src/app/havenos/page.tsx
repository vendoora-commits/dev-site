import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HavenOS | Vendoora',
  description: 'AI-powered operational services for hospitality. Guest delight, staff efficiency, and management clarity—online or offline.',
  openGraph: {
    title: 'HavenOS | Vendoora',
    description: 'AI-powered operational services for hospitality. Guest delight, staff efficiency, and management clarity—online or offline.',
    images: ['/images/88E069A5-9563-4D82-800D-00E7705B76C7.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HavenOS | Vendoora',
    description: 'AI-powered operational services for hospitality. Guest delight, staff efficiency, and management clarity—online or offline.',
    images: ['/images/88E069A5-9563-4D82-800D-00E7705B76C7.png'],
  },
};
import { BuildingOffice2Icon, UserIcon, UsersIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function HavenOSPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-12">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/HavanOS_Hero.png" alt="HavenOS Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <BuildingOffice2Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <p className="text-sm uppercase tracking-wide text-blue-600">HavenOS</p>
        </div>
        <h1 className="text-5xl font-bold mt-4">AI-Powered Operational Services</h1>
        <p className="text-xl mt-4">One unified suite for guest delight, staff efficiency, and management clarity—built to run online or offline.</p>

        {/* More Substance: Features & Use Cases */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Choose HavenOS?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Privacy-First AI</h3>
              <p>All guest and staff interactions are powered by on-device AI, ensuring instant, personal service with zero persistent data risk.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Sustainability by Design</h3>
              <p>Track energy, water, and waste. Real-time dashboards for managers. QR storytelling for guests. Carbon-aware CI/CD practices.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Compliance & Security</h3>
              <p>GDPR, SOC 2, ISO 27001, PCI, and more. Trust Dashboard for high-privilege role changes. Auto-wipe and token vault for devices.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Unified Staff Experience</h3>
              <p>Role-adaptive staff app (butler, concierge, housekeeping, valet), AI co-pilot for routing and workload balance, Request Help for real-time team support.</p>
            </div>
          </div>
        </section>

        {/* Advanced Next.js Features: Loading State Example */}
        {/* <Suspense fallback={<div>Loading...</div>}> ...future dynamic content... </Suspense> */}

        <section className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <UserIcon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            <h2 className="text-3xl font-semibold">The Guest Experience</h2>
          </div>
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
          <div className="flex items-center gap-2 mb-8">
            <UsersIcon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            <h2 className="text-3xl font-semibold">Unified for Staff</h2>
          </div>
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
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheckIcon className="h-7 w-7 text-blue-600" aria-hidden="true" />
            <h2 className="text-3xl font-semibold">Security & Compliance by Design</h2>
          </div>
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
          <div className="flex items-center gap-2 mb-8">
            <SparklesIcon className="h-7 w-7 text-green-600" aria-hidden="true" />
            <h2 className="text-3xl font-semibold">Sustainability by Design</h2>
          </div>
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
