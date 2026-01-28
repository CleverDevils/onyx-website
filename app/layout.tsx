import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Onyx Integrations | Professional AV Integration Services',
  description: 'Expert audiovisual integration services for commercial, residential, and corporate spaces. Custom AV solutions, installation, and ongoing support.',
  keywords: ['AV integration', 'audiovisual', 'commercial AV', 'residential AV', 'AV installation', 'smart home', 'conference room'],
  authors: [{ name: 'Onyx Integrations' }],
  openGraph: {
    title: 'Onyx Integrations | Professional AV Integration Services',
    description: 'Expert audiovisual integration services for commercial, residential, and corporate spaces.',
    url: 'https://onyxintegrations.com',
    siteName: 'Onyx Integrations',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
