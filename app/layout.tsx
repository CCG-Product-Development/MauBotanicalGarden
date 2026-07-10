import type { Metadata } from 'next'
import { Playfair_Display, Libre_Baskerville, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900']
});
const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  variable: '--font-body',
  weight: ['400', '700']
});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-accent',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Mau Summit Botanical Institute (MSBI)',
  description: 'Experience nature at its peak. We restore health naturally by combining time-honored African herbal wisdom with science-backed research.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${libreBaskerville.variable} ${cormorantGaramond.variable} font-body antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
