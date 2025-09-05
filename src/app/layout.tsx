import type { Metadata } from 'next'
import './globals.css'
import { getDirection } from '../utils/direction';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Vendoora: Operational Services',
  description:
    'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon_io/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon_io/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180' }
    ],
  // Android icons are referenced via the manifest file below
  },
  openGraph: {
    title: 'Vendoora: AI-Powered Operational Services',
    description: 'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
    images: ['/images/88E069A5-9563-4D82-800D-00E7705B76C7.png'],
    url: 'https://www.vendoora.dev',
    siteName: 'Vendoora',
    type: 'website',
  },
  manifest: '/favicon_io/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'Vendoora: AI-Powered Operational Services',
    description: 'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
    images: ['/images/88E069A5-9563-4D82-800D-00E7705B76C7.png'],
  },
  metadataBase: new URL('https://www.vendoora.dev'),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();
  const direction = getDirection(locale);
  
  return (
    <html lang={locale} dir={direction}>
      <body className={`bg-gray-50 ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
