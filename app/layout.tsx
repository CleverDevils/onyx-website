import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Onyx | Audiovisual Design Studio',
  description: 'We craft immersive audiovisual experiences for commercial and residential spaces.',
  keywords: ['AV design', 'audiovisual', 'studio', 'immersive experiences', 'AV integration'],
  authors: [{ name: 'Onyx' }],
  openGraph: {
    title: 'Onyx | Audiovisual Design Studio',
    description: 'We craft immersive audiovisual experiences for commercial and residential spaces.',
    url: 'https://onyxintegrations.com',
    siteName: 'Onyx',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
