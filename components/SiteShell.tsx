'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname?.startsWith('/guide')) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex flex-col bg-rofe-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
