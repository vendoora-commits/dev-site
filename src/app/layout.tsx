import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vendoora: AI-Powered Operational Services',
  description:
    'Unified operational services for hospitality and maritime, built by developers who want to own the future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Vendoora
            </Link>
            <div className="space-x-6">
              <Link href="/havenos" className="hover:text-blue-600 transition">
                HavenOS
              </Link>
              <Link href="/dockos" className="hover:text-blue-600 transition">
                DockOS
              </Link>
              <Link href="/developers" className="hover:text-blue-600 transition">
                Careers
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="pt-20">{children}</div>
        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Vendoora. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
