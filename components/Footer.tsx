import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-rofe-basalt text-rofe-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <Image
              src="/brand/logo-wordmark-dark.svg"
              alt="RØFE Living"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
            <p className="text-rofe-ash text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Authentic stays rooted in the volcanic soul of Lanzarote, Canary Islands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-rofe-drift mb-6"
              style={{ fontWeight: 300 }}
            >
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/properties', label: 'Properties' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    href={to}
                    className="text-rofe-ash hover:text-rofe-cream transition-colors text-sm"
                    style={{ fontWeight: 300 }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-rofe-drift mb-6"
              style={{ fontWeight: 300 }}
            >
              Properties
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/properties/rofe-la-santa"
                  className="text-rofe-ash hover:text-rofe-cream transition-colors text-sm"
                  style={{ fontWeight: 300 }}
                >
                  RØFE La Santa
                </Link>
              </li>
              <li>
                <span className="text-rofe-stone text-sm italic" style={{ fontWeight: 300 }}>
                  More coming soon
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase text-rofe-drift mb-6"
              style={{ fontWeight: 300 }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                <Mail className="w-4 h-4 text-rofe-drift" />
                <a
                  href="mailto:hello@rofeliving.es"
                  className="hover:text-rofe-cream transition-colors"
                >
                  hello@rofeliving.es
                </a>
              </li>
              <li className="flex items-start gap-3 text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                <MapPin className="w-4 h-4 text-rofe-drift mt-0.5 flex-shrink-0" />
                <span>La Santa, Lanzarote<br />Canary Islands, Spain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rofe-stone mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-rofe-ash text-xs tracking-[0.1em]" style={{ fontWeight: 300 }}>
            &copy; {new Date().getFullYear()} RØFE Living. All rights reserved.
          </p>
          <p className="text-rofe-ash/50 text-xs tracking-[0.05em]" style={{ fontWeight: 300 }}>
            Lanzarote, Canary Islands
          </p>
        </div>
      </div>
    </footer>
  )
}
