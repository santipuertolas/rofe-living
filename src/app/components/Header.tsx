import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = scrolled || !isHome || mobileMenuOpen
    ? 'bg-rofe-white/95 backdrop-blur-sm border-b border-rofe-cream'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-rofe-basalt'
    : 'text-rofe-cream';

  const mutedColor = scrolled || !isHome
    ? 'text-rofe-ash hover:text-rofe-basalt'
    : 'text-rofe-cream/70 hover:text-rofe-cream';

  const activeColor = scrolled || !isHome
    ? 'text-rofe-basalt'
    : 'text-rofe-cream';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Hexagonal icon mark */}
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z"
                stroke={scrolled || !isHome ? '#2B2B2A' : '#E8E4DF'}
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z"
                stroke={scrolled || !isHome ? '#2B2B2A' : '#E8E4DF'}
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
            </svg>
            <div className="flex flex-col">
              <span
                className={`text-lg tracking-[0.35em] ${textColor}`}
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100 }}
              >
                RØFE
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] ${scrolled || !isHome ? 'text-rofe-drift' : 'text-rofe-cream/60'}`}
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100 }}
              >
                LIVING
              </span>
            </div>
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
                to={path}
                className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(path) ? activeColor : mutedColor
                }`}
                style={{ fontWeight: 300 }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
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
          <div className="md:hidden py-8 border-t border-rofe-cream">
            <div className="flex flex-col gap-6">
              {[
                { path: '/', label: 'Home' },
                { path: '/properties', label: 'Properties' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
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
                to="/contact"
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
  );
}