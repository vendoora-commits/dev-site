'use client';

import Image from 'next/image';
import { useMessages, useLocale } from 'next-intl';
import { getDirection } from '../../../utils/direction';

export default function AboutPage() {
	const messages = useMessages();
	const locale = useLocale();
	const direction = getDirection(locale);
	const isRTL = direction === 'rtl';
	
	return (
		<div className={`min-h-screen bg-white text-black ${isRTL ? 'rtl' : 'ltr'}`}>
			<div className="container mx-auto px-4 py-16 max-w-4xl">
				<div className="w-full rounded-lg mb-10 overflow-hidden">
					<Image src="/images/About_Hero.png" alt="Vendoora Enterprise Hero" width={1200} height={400} priority sizes="(max-width: 768px) 100vw, 1200px" />
				</div>

				<h1 className={`text-4xl md:text-5xl font-extrabold mb-6 text-blue-900 tracking-tight ${isRTL ? 'text-right' : 'text-left'}`}>{messages['AboutTitle']}</h1>
				<p className={`text-lg md:text-xl mb-10 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
					{messages['AboutDescription']}
				</p>

				<section className="mb-12">
					<h2 className={`text-2xl font-bold mb-4 text-blue-800 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['MarketsWeServe']}</h2>
					<ul className={`list-disc space-y-2 text-gray-800 ${isRTL ? 'mr-6' : 'ml-6'}`}>
						<li><span className="font-semibold">{messages['MarketsHotels']}</span></li>
						<li><span className="font-semibold">{messages['MarketsSeniorLiving']}</span></li>
						<li><span className="font-semibold">{messages['MarketsCampgrounds']}</span></li>
						<li><span className="font-semibold">{messages['MarketsMarinas']}</span></li>
						<li><span className="font-semibold">{messages['MarketsStudentHousing']}</span></li>
					</ul>
					<p className={`mt-4 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['MarketsConclusion']}</p>
				</section>

				<section className="mb-12">
					<h2 className={`text-2xl font-bold mb-4 text-blue-800 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['ComplianceTitle']}</h2>
					<p className={`text-gray-800 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['ComplianceDescription']}</p>
				</section>

				<section className="mb-12">
					<h2 className={`text-2xl font-bold mb-4 text-blue-800 ${isRTL ? 'text-right' : 'text-left'}`}>{messages['WhyVendooraTitle']}</h2>
					<ul className={`list-disc space-y-2 text-gray-800 ${isRTL ? 'mr-6' : 'ml-6'}`}>
						<li><span className="font-semibold">{messages['WhyVendooraAI']}</span></li>
						<li><span className="font-semibold">{messages['WhyVendooraEdge']}</span></li>
						<li><span className="font-semibold">{messages['WhyVendooraEmployee']}</span></li>
						<li><span className="font-semibold">{messages['WhyVendooraSustainability']}</span></li>
					</ul>
				</section>
			</div>
		</div>
	);
}