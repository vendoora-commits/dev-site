import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | Vendoora',
	description: 'Engineering operational services at global scale. AI-native, edge-resilient, compliance-first platforms for hospitality and maritime.',
	openGraph: {
		title: 'About | Vendoora',
		description: 'Engineering operational services at global scale. AI-native, edge-resilient, compliance-first platforms for hospitality and maritime.',
		images: ['/images/Global expansion.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'About | Vendoora',
		description: 'Engineering operational services at global scale. AI-native, edge-resilient, compliance-first platforms for hospitality and maritime.',
		images: ['/images/Global expansion.png'],
	},
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-white text-black">
			<div className="container mx-auto px-4 py-16 max-w-4xl">
				<div className="w-full rounded-lg mb-10 overflow-hidden">
					<Image src="/images/About_Hero.png" alt="Vendoora Enterprise Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
				</div>

				<h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-900 tracking-tight">Vendoora — Engineering Operational Services at Global Scale</h1>
				<p className="text-lg md:text-xl mb-10 text-gray-700">
					Vendoora is an AI-native, edge-resilient, and compliance-first platform purpose-built to unify operations across the global hospitality, living, and maritime industries. Designed for enterprise performance, security, and scale, Vendoora redefines how operators, staff, and guests connect — seamlessly, sustainably, and intelligently.
				</p>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-800">Markets We Serve</h2>
					<ul className="list-disc ml-6 space-y-2 text-gray-800">
						<li><span className="font-semibold">Hotels & Resorts</span> — From boutique properties to global chains.</li>
						<li><span className="font-semibold">Senior Living Communities</span> — Enhancing safety, efficiency, and personalized care.</li>
						<li><span className="font-semibold">Campgrounds & RV Parks</span> — Delivering offline resilience for remote destinations.</li>
						<li><span className="font-semibold">Marinas & Cruises</span> — Edge-first operations designed for complex, mobile environments.</li>
						<li><span className="font-semibold">Student Housing & Mixed-Use Properties</span> — Unified experiences for diverse resident populations.</li>
					</ul>
					<p className="mt-4 text-gray-700">Wherever people gather to live, stay, or travel, Vendoora provides a unified foundation for operational excellence.</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-800">Compliance & Security by Design</h2>
					<p className="text-gray-800 mb-2">Global operations demand trust and governance. Vendoora incorporates regional compliance frameworks — GDPR, PIPL, SOC 2, ISO 27001, PCI DSS, and IMO maritime standards — and multilingual, culturally adaptive UX built in from day one. This ensures every property can operate securely, inclusively, and sustainably, no matter the region.</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 text-blue-800">Why Vendoora</h2>
					<ul className="list-disc ml-6 space-y-2 text-gray-800">
						<li><span className="font-semibold">AI-Native Core</span> — Concierge services, staff co-pilots, predictive maintenance, and dynamic pricing.</li>
						<li><span className="font-semibold">Edge + Cloud Hybrid</span> — Offline-first resilience with seamless cloud scalability.</li>
						<li><span className="font-semibold">Employee-Owned Team</span> — Long-term alignment with customers, not outside shareholders.</li>
						<li><span className="font-semibold">Sustainability at Scale</span> — Energy, water, and waste dashboards for ESG reporting and guest transparency.</li>
					</ul>
				</section>
			</div>
		</div>
	);
}