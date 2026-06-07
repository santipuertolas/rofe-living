import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Users, MapPin, Check, ArrowLeft } from 'lucide-react'
import { arrecifeUnits, ArrecifeUnitId } from '@/lib/properties'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ unit: string }>
}

export function generateStaticParams() {
  return arrecifeUnits.map((u) => ({ unit: u.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { unit } = await params
  const data = arrecifeUnits.find((u) => u.id === unit)
  if (!data) return {}
  return {
    title: `${data.displayName} — RØFE Arrecife`,
    description: data.shortDescription,
  }
}

export default async function ArrecifeUnitPage({ params }: Props) {
  const { unit } = await params
  const data = arrecifeUnits.find((u) => u.id === (unit as ArrecifeUnitId))

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <Link
          href="/properties/rofe-arrecife"
          className="inline-flex items-center gap-2 text-rofe-ash hover:text-rofe-basalt transition-colors text-sm tracking-[0.1em] uppercase"
          style={{ fontWeight: 300 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to RØFE Arrecife
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        {/* Mobile: single image */}
        <div className="md:hidden aspect-[16/9] overflow-hidden relative">
          <Image
            src={data.images[0]}
            alt={`${data.displayName} — main photo`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        {/* Desktop: 5-photo grid (or single large if only one image) */}
        {data.images.length === 1 ? (
          <div className="hidden md:block aspect-[16/9] overflow-hidden relative">
            <Image
              src={data.images[0]}
              alt={`${data.displayName} — main photo`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ) : (
          <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[520px]">
            <div className="col-span-2 row-span-2 overflow-hidden relative">
              <Image
                src={data.images[0]}
                alt={`${data.displayName} — main photo`}
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>
            {data.images.slice(1, 5).map((img, i) => (
              <div key={i} className="overflow-hidden relative">
                <Image
                  src={img}
                  alt={`${data.displayName} — photo ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Unit Details */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-rofe-drift mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-xs tracking-[0.15em] uppercase" style={{ fontWeight: 300 }}>
                  Arrecife, Lanzarote
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl text-rofe-basalt tracking-[0.04em] mb-2"
                style={{ fontWeight: 200 }}
              >
                {data.displayName}
              </h1>
              <p
                className="text-sm text-rofe-drift uppercase tracking-[0.1em]"
                style={{ fontWeight: 300 }}
              >
                {data.type}
              </p>
            </div>

            <div className="flex items-center gap-10 py-8 border-y border-rofe-cream">
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-rofe-drift" />
                <div>
                  <div
                    className="text-xs text-rofe-drift uppercase tracking-[0.1em]"
                    style={{ fontWeight: 300 }}
                  >
                    Bedrooms
                  </div>
                  <div className="text-rofe-basalt" style={{ fontWeight: 300 }}>
                    {data.bedrooms === 0 ? 'Studio' : data.bedrooms}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 text-rofe-drift" />
                <div>
                  <div
                    className="text-xs text-rofe-drift uppercase tracking-[0.1em]"
                    style={{ fontWeight: 300 }}
                  >
                    Bathrooms
                  </div>
                  <div className="text-rofe-basalt" style={{ fontWeight: 300 }}>
                    {data.bathrooms}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-rofe-drift" />
                <div>
                  <div
                    className="text-xs text-rofe-drift uppercase tracking-[0.1em]"
                    style={{ fontWeight: 300 }}
                  >
                    Max Guests
                  </div>
                  <div className="text-rofe-basalt" style={{ fontWeight: 300 }}>
                    {data.maxGuests}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl mb-5 text-rofe-basalt tracking-[0.04em]"
                style={{ fontWeight: 200 }}
              >
                About This Apartment
              </h2>
              <p className="text-rofe-ash leading-relaxed" style={{ fontWeight: 300 }}>
                {data.description}
              </p>
            </div>

            {data.amenities.length > 0 && (
              <div>
                <h2
                  className="text-2xl mb-5 text-rofe-basalt tracking-[0.04em]"
                  style={{ fontWeight: 200 }}
                >
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-rofe-drift flex-shrink-0" />
                      <span className="text-rofe-ash text-sm" style={{ fontWeight: 300 }}>
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2
                className="text-lg mb-4 text-rofe-basalt tracking-[0.05em]"
                style={{ fontWeight: 200 }}
              >
                Book Your Stay
              </h2>
              <div className="bg-rofe-warm border border-rofe-cream p-8 text-center">
                <p className="text-rofe-ash text-sm mb-4" style={{ fontWeight: 300 }}>
                  Contact us to book {data.displayName}
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-rofe-basalt text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors"
                  style={{ fontWeight: 300 }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
