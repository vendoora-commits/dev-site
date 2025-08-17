import Image from 'next/image';

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-white text-black">
			<div className="container mx-auto px-4 py-12 max-w-3xl">
				<div className="w-full rounded-lg mb-8 overflow-hidden">
					<Image src="/images/about-hero.svg" alt="About" width={1200} height={400} />
				</div>
				<p className="text-sm uppercase tracking-wide text-blue-600 mb-2">About</p>
				<h1 className="text-5xl font-bold mb-4">Engineering Operational Services at Global Scale</h1>
				<p className="text-xl mb-10">
					AI-native, edge-resilient, compliance-first platforms unifying hospitality and maritime experiences—built by an employee-owned team.
				</p>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-2">What “OS” Means Here</h2>
					<p>OS = Operational Services (not device operating systems).</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-2">Global Expansion</h2>
					<p>Hotels, resorts, senior living, campgrounds, marinas, cruises.</p>
					<p>Regional compliance + multilingual UX baked in.</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-2">Security & Compliance</h2>
					<ul className="list-disc ml-6">
						<li>GDPR, SOC 2, ISO 27001, PCI, IMO</li>
						<li>Trust Dashboard for high-privilege role changes</li>
					</ul>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-2">Sustainability</h2>
					<ul className="list-disc ml-6">
						<li>Energy, water, and waste tracking with carbon insights</li>
						<li>Edge computing reduces backhaul load</li>
						<li>CI/CD includes carbon-aware practices</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

