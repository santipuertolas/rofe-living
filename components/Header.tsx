'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerBg =
    scrolled || !isHome || mobileMenuOpen
      ? 'bg-rofe-white/95 backdrop-blur-sm border-b border-rofe-cream'
      : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-rofe-basalt' : 'text-rofe-cream'
  const mutedColor =
    scrolled || !isHome
      ? 'text-rofe-ash hover:text-rofe-basalt'
      : 'text-rofe-cream/70 hover:text-rofe-cream'
  const activeColor = scrolled || !isHome ? 'text-rofe-basalt' : 'text-rofe-cream'

  const logoSrc =
    scrolled || !isHome
      ? '/brand/logo-horizontal-light.svg'
      : '/brand/logo-horizontal-dark.svg'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="RØFE Living"
              width={180}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { path: '/', label: 'Home' },
              { path: '/properties', label: 'Properties' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(path) ? activeColor : mutedColor
                }`}
                style={{ fontWeight: 300 }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/properties"
              className={`text-sm tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                scrolled || !isHome
                  ? 'border-rofe-basalt text-rofe-basalt hover:bg-rofe-basalt hover:text-rofe-cream'
                  : 'border-rofe-cream/50 text-rofe-cream hover:bg-rofe-cream/10'
              }`}
              style={{ fontWeight: 300 }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-rofe-basalt" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-rofe-cream bg-rofe-white/98">
            <div className="flex flex-col gap-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/properties', label: 'Properties' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                    isActive(path) ? 'text-rofe-basalt' : 'text-rofe-ash hover:text-rofe-basalt'
                  }`}
                  style={{ fontWeight: 300 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/properties"
                className="text-sm tracking-[0.15em] uppercase px-6 py-3 border border-rofe-basalt text-rofe-basalt hover:bg-rofe-basalt hover:text-rofe-cream transition-all text-center"
                style={{ fontWeight: 300 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
