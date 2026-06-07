import type { Metadata } from 'next'
import { SiteShell } from '@/components/SiteShell'
import './globals.css'

export const metadata: Metadata = {
  title: 'RØFE Living — Authentic Stays in Lanzarote',
  description:
    'Discover authentic, minimalist vacation rentals in Lanzarote, Canary Islands. RØFE Living offers curated stays rooted in the volcanic soul of the island.',
  metadataBase: new URL('https://rofeliving.es'),
  openGraph: {
    title: 'RØFE Living — Authentic Stays in Lanzarote',
    description:
      'Discover authentic, minimalist vacation rentals in Lanzarote, Canary Islands.',
    url: 'https://rofeliving.es',
    siteName: 'RØFE Living',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
