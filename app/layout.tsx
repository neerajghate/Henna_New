import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rita Sheth - Professional Henna Artist | Mehendi Artisan',
  description: 'Professional henna artist Rita Sheth serving Denver, CO. Specializing in bridal mehendi, Arabic designs, makeup, and hair styling. 18+ years of experience.',
  keywords: 'henna artist, mehendi, bridal henna, Arabic henna, makeup artist, hair styling, Denver, Colorado',
  authors: [{ name: 'Rita Sheth' }],
  openGraph: {
    title: 'Rita Sheth - Professional Henna Artist',
    description: 'Professional henna artist with 18+ years of experience. Serving Denver, CO with bridal mehendi, Arabic designs, and more.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
