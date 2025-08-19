import type { Metadata } from 'next'
import Link from 'next/link'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import './globals.css'
import LanguageSwitcher from '../components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Vendoora: Operational Services',
  description:
    'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.ico', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: 'Vendoora: AI-Powered Operational Services',
    description: 'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
    images: ['/images/88E069A5-9563-4D82-800D-00E7705B76C7.png'],
    url: 'https://www.vendoora.dev',
    siteName: 'Vendoora',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendoora: AI-Powered Operational Services',
    description: 'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
    images: ['/images/88E069A5-9563-4D82-800D-00E7705B76C7.png'],
  },
  metadataBase: new URL('https://www.vendoora.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = useMessages();
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <NextIntlClientProvider messages={messages}>
          {/* ENTERPRISE NAVIGATION BAR */}
          <nav className="w-full bg-blue-900 py-6 shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
              <Link href="/" className="text-3xl font-bold text-white tracking-wide">
                {messages['Vendoora']}
              </Link>
              <div className="flex space-x-8 items-center">
                <Link href="/" className="text-white font-bold text-lg hover:text-blue-300">{messages['Home']}</Link>
                <Link href="/havenos" className="text-white font-bold text-lg hover:text-blue-300">{messages['HavenOS']}</Link>
                <Link href="/dockos" className="text-white font-bold text-lg hover:text-blue-300">{messages['DockOS']}</Link>
                <Link href="/technology" className="text-white font-bold text-lg hover:text-blue-300">{messages['Technology']}</Link>
                <Link href="/about" className="text-white font-bold text-lg hover:text-blue-300">{messages['About']}</Link>
                <Link href="/contact" className="text-white font-bold text-lg hover:text-blue-300">{messages['Contact']}</Link>
                <Link href="/developers" className="text-white font-bold text-lg hover:text-blue-300">{messages['Careers']}</Link>
                {/* Language Switcher */}
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
          <div className="pt-28">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
