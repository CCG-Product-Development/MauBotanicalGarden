import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Mau Summit Botanical Gardens | Kenya\'s Premier Botanical Discovery Center',
  description: 'Discover Kenya\'s premier center for botanical discovery, natural wellness, guided tours, and premium herbal products. Explore indigenous African plant heritage at Mau Summit Botanical Gardens.',
  keywords: ['botanical garden', 'Kenya', 'herbal teas', 'natural wellness', 'Mau Summit', 'African herbs', 'ecotourism', 'Tinet'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
