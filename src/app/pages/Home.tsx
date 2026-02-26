import { Link } from 'react-router';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/properties';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1771267174948-a1bf95e7a9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGxhbmRzY2FwZSUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3MjEzMTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Lanzarote Volcanic Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rofe-basalt/30 via-rofe-basalt/20 to-rofe-basalt/50" />
        </div>

        <div className="relative z-10 text-center text-rofe-cream px-6 max-w-4xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 text-rofe-cream/70"
            style={{ fontWeight: 300 }}
          >
            Lanzarote, Canary Islands
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 text-rofe-cream tracking-[0.06em]"
            style={{ fontWeight: 200, lineHeight: 1.1 }}
          >
            Rooted in<br />Volcanic Soul
          </h1>
          <p className="text-lg md:text-xl mb-12 text-rofe-cream/80 max-w-xl mx-auto" style={{ fontWeight: 300 }}>
            Authentic luxury stays where the raw beauty of the Canaries meets modern, minimalist hospitality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="px-8 py-3.5 bg-rofe-cream text-rofe-basalt text-sm tracking-[0.15em] uppercase hover:bg-rofe-warm transition-colors inline-flex items-center justify-center gap-3"
              style={{ fontWeight: 300 }}
            >
              Explore Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3.5 border border-rofe-cream/40 text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-cream/10 transition-colors"
              style={{ fontWeight: 300 }}
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-rofe-cream/30 mx-auto mb-2" />
          <p className="text-[10px] tracking-[0.2em] text-rofe-cream/40 uppercase" style={{ fontWeight: 300 }}>
            Scroll
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-rofe-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-rofe-drift mb-4" style={{ fontWeight: 300 }}>
              Curated Selection
            </p>
            <h2 className="text-4xl md:text-5xl text-rofe-basalt tracking-[0.04em]" style={{ fontWeight: 200 }}>
              Featured Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-rofe-basalt text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors"
              style={{ fontWeight: 300 }}
            >
              View All Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Strip */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-rofe-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="44" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z" stroke="#A39E97" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 text-rofe-basalt tracking-[0.05em]" style={{ fontWeight: 200 }}>
                Volcanic Heritage
              </h3>
              <p className="text-rofe-ash text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                Named after the traditional volcanic stone used for centuries in Canarian agriculture to retain moisture in arid soil
              </p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="44" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z" stroke="#A39E97" strokeWidth="1" fill="none" />
                  <path d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z" stroke="#A39E97" strokeWidth="0.75" fill="none" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 text-rofe-basalt tracking-[0.05em]" style={{ fontWeight: 200 }}>
                Curated Design
              </h3>
              <p className="text-rofe-ash text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                Each property is thoughtfully designed to celebrate the island's unique character with modern, minimalist elegance
              </p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="44" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z" stroke="#A39E97" strokeWidth="1" fill="none" />
                  <circle cx="16" cy="18" r="4" stroke="#A39E97" strokeWidth="0.75" fill="none" />
                </svg>
              </div>
              <h3 className="text-lg mb-3 text-rofe-basalt tracking-[0.05em]" style={{ fontWeight: 200 }}>
                Attentive Service
              </h3>
              <p className="text-rofe-ash text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                Dedicated concierge service anticipating your needs throughout your stay on the island
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762117360871-f11fbad00ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzcyMDk2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-rofe-basalt/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center text-rofe-cream">
          <p className="text-xs tracking-[0.3em] uppercase mb-6 text-rofe-cream/60" style={{ fontWeight: 300 }}>
            Begin Your Journey
          </p>
          <h2 className="text-4xl md:text-5xl mb-8 tracking-[0.04em]" style={{ fontWeight: 200 }}>
            Your Lanzarote Escape Awaits
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-rofe-cream text-rofe-basalt text-sm tracking-[0.15em] uppercase hover:bg-rofe-warm transition-colors"
            style={{ fontWeight: 300 }}
          >
            Book Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
