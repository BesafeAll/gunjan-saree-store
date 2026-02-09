import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gunjan Saree Store - Premium Sarees in Purnia | Wedding, Festive & Silk Sarees',
  description: 'Shop authentic wedding sarees, festive collections, silk and Banarasi sarees at Gunjan Saree Store in Purnia, Bihar. Open 24 hours. Best saree shop near me with affordable prices.',
  keywords: 'saree shop near me, best saree store Purnia, wedding sarees, silk sarees, Banarasi sarees, festive sarees, daily wear sarees, saree shop Purnia Bihar, 24 hour saree store',
  authors: [{ name: 'Gunjan Saree Store' }],
  openGraph: {
    title: 'Gunjan Saree Store - Premium Sarees in Purnia',
    description: 'Discover beautiful sarees for every occasion. Wedding, festive, silk & Banarasi collections. Open 24 hours.',
    url: 'https://gunjansareestore.com',
    siteName: 'Gunjan Saree Store',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Gunjan Saree Store - Premium Saree Collection',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
