import Image from 'next/image';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="w-full rounded-lg mb-8 overflow-hidden">
          <Image src="/images/technology-hero.svg" alt="Technology" width={1200} height={400} />
        </div>

        <p className="text-sm uppercase tracking-wide text-blue-600 mb-2">Technology</p>
        <h1 className="text-5xl font-bold mb-4">Edge + Cloud, AI-Native, Privacy-First</h1>
        <p className="text-xl mb-10">A modern stack designed to run the real world—online and offline.</p>

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
