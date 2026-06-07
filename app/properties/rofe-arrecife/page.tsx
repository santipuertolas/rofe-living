import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Users, MapPin, ArrowRight } from 'lucide-react'
import { arrecifeUnits } from '@/lib/properties'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RØFE Arrecife — RØFE Living',
  description:
    'Three individually designed apartments in the heart of Arrecife — CALIMA, MOJO, and PICÓN. Each named after an element of Canarian culture.',
}

export default function ArrecifeOverviewPage() {
  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Header */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-rofe-warm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-rofe-drift mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-xs tracking-[0.15em] uppercase" style={{ fontWeight: 300 }}>
              Arrecife, Lanzarote
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl text-rofe-basalt tracking-[0.04em] mb-4"
            style={{ fontWeight: 200 }}
          >
            RØFE Arrecife
          </h1>
          <p
            className="text-lg text-rofe-ash max-w-xl mt-4"
            style={{ fontWeight: 300 }}
          >
            Three individually designed apartments at Calle Fajardo 11 — CALIMA, MOJO, and PICÓN.
            The entire building is exclusively for RØFE guests.
          </p>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arrecifeUnits.map((unit) => (
              <Link
                key={unit.id}
                href={`/properties/rofe-arrecife/${unit.id}`}
                className="group"
              >
                <div className="overflow-hidden bg-rofe-white hover:shadow-lg transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={unit.images[0]}
                      alt={unit.displayName}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 border border-t-0 border-rofe-cream/60">
                    <h3
                      className="text-xl tracking-[0.05em] mb-1 text-rofe-basalt group-hover:text-rofe-stone transition-colors"
                      style={{ fontWeight: 200 }}
                    >
                      {unit.displayName}
                    </h3>
                    <p
                      className="text-xs text-rofe-drift uppercase tracking-[0.1em] mb-4"
                      style={{ fontWeight: 300 }}
                    >
                      {unit.type}
                    </p>
                    <p
                      className="text-rofe-ash text-sm mb-5 line-clamp-2 leading-relaxed"
                      style={{ fontWeight: 300 }}
                    >
                      {unit.shortDescription}
                    </p>

                    {/* Features */}
                    <div className="flex items-center gap-5 text-sm text-rofe-ash border-t border-rofe-cream pt-4">
                      <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
                        <Bed className="w-4 h-4 text-rofe-drift" />
                        <span>{unit.bedrooms === 0 ? 'Studio' : unit.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
                        <Bath className="w-4 h-4 text-rofe-drift" />
                        <span>{unit.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
                        <Users className="w-4 h-4 text-rofe-drift" />
                        <span>{unit.maxGuests}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Building Info */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-rofe-warm">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase text-rofe-drift mb-4"
            style={{ fontWeight: 300 }}
          >
            The Building
          </p>
          <h2
            className="text-3xl text-rofe-basalt tracking-[0.04em] mb-6"
            style={{ fontWeight: 200 }}
          >
            Exclusively yours
          </h2>
          <p className="text-rofe-ash leading-relaxed mb-8" style={{ fontWeight: 300 }}>
            Calle Fajardo 11 is a small building in the heart of Arrecife — walking distance from
            the seafront, the market, and the best restaurants in the capital. When you stay here,
            the whole building is RØFE guests only. There is a shared rooftop terrace and a shared
            laundry room.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-rofe-basalt text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors"
            style={{ fontWeight: 300 }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
