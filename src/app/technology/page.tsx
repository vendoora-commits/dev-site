import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology | Vendoora',
  description: 'Modern stack: Next.js, Tailwind, Heroicons, edge + cloud, privacy-first AI, and global i18n.',
  openGraph: {
    title: 'Technology | Vendoora',
    description: 'Modern stack: Next.js, Tailwind, Heroicons, edge + cloud, privacy-first AI, and global i18n.',
    images: ['public/images/Technology_Hero.png'],
  },
  twitter: {
  card: 'summary_large_image',
  title: 'Technology | Vendoora',
  description: 'Modern stack: Next.js, Tailwind, Heroicons, edge + cloud, privacy-first AI, and global i18n.',
  images: ['/images/Technology_Hero.png'],
  },
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/Technology_Hero.png" alt="Technology Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
        </div>

        <p className="text-sm uppercase tracking-wide text-blue-600 mb-2">Technology</p>
        <h1 className="text-5xl font-bold mb-4">Edge + Cloud, AI-Native, Privacy-First</h1>
        <p className="text-xl mb-10">A modern stack designed to run the real world—online and offline.</p>

        {/* Responsive Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Tech Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Edge_Node.png" alt="Edge Node" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Edge Node</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Cloud_Sync.png" alt="Cloud Sync" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Cloud Sync</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Security.png" alt="Security" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Security</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/images/Technology_Compliance.png" alt="Compliance" width={300} height={150} className="rounded shadow" sizes="(max-width: 768px) 100vw, 300px" />
              <span className="mt-2 text-base text-gray-800 font-medium text-center">Compliance</span>
            </div>
          </div>
        </section>

        {/* More Substance: Tech Stack & How It Works */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Tech Stack</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Next.js 15 (App Router, Turbopack, Metadata API)</li>
            <li>Tailwind CSS 4 for rapid, responsive UI</li>
            <li>Heroicons for beautiful SVG icons</li>
            <li>next/font for optimized font loading</li>
            <li>TypeScript for type safety</li>
            <li>Supabase/Postgres for real-time data</li>
            <li>Edge nodes for local continuity, cloud for global insight</li>
            <li>Encrypted P2P sync, E2E security, CI/CD, i18n</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <p>Vendoora platforms run on the edge and in the cloud, using privacy-first AI and real-time data to power hospitality and maritime operations globally.</p>
        </section>

        {/* Advanced Next.js Features: Loading State Example */}
        {/* <Suspense fallback={<div>Loading...</div>}> ...future dynamic content... </Suspense> */}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Core Stack</h2>
          <ul className="list-disc ml-6">
            <li>Supabase/Postgres real-time data & auditable logs</li>
            <li>Edge nodes for local continuity, cloud for global insight</li>
            <li>Encrypted P2P sync across surfaces (guest, staff, admin)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Apple Intelligence Integration</h2>
          <p>On-device, privacy-first inference for live translation and context-aware assistance.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">i18n & Continuous Localization</h2>
          <p>Runtime i18n libraries + CI-driven translation updates.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Security & Compliance</h2>
          <ul className="list-disc ml-6">
            <li>End-to-end encryption</li>
            <li>MFA/2FA</li>
            <li>SBOM scanning</li>
            <li>Regional data silos</li>
            <li>Compliance: GDPR, SOC 2, ISO 27001, PCI, IMO</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
