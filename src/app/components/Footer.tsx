import { Link } from 'react-router';
import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-rofe-basalt text-rofe-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex flex-col">
              <span
                className="text-xl tracking-[0.35em] text-rofe-cream"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100 }}
              >
                RØFE
              </span>
              <span
                className="text-xs tracking-[0.3em] text-rofe-ash"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100 }}
              >
                LIVING
              </span>
            </div>
            <p className="text-rofe-ash text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Authentic luxury stays rooted in the volcanic soul of Lanzarote, Canary Islands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-rofe-drift mb-6" style={{ fontWeight: 300 }}>
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
                  <Link to={to} className="text-rofe-ash hover:text-rofe-cream transition-colors text-sm" style={{ fontWeight: 300 }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-rofe-drift mb-6" style={{ fontWeight: 300 }}>
              Properties
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/properties/villa-oceana', label: 'Villa Oceana' },
                { to: '/properties/casa-marina', label: 'Casa Marina' },
                { to: '/properties/loft-vulcano', label: 'Loft Vulcano' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-rofe-ash hover:text-rofe-cream transition-colors text-sm" style={{ fontWeight: 300 }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-rofe-drift mb-6" style={{ fontWeight: 300 }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                <Mail className="w-4 h-4 text-rofe-drift" />
                <span>hello@rofeliving.com</span>
              </li>
              <li className="flex items-center gap-3 text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                <Phone className="w-4 h-4 text-rofe-drift" />
                <span>+34 123 456 789</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-rofe-ash hover:text-rofe-cream transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
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
  );
}