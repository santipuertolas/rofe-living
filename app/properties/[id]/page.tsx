import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Users, MapPin, Check, ArrowLeft } from 'lucide-react'
import { properties } from '@/lib/properties'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return properties
    .filter((p) => p.status === 'available')
    .map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const property = properties.find((p) => p.id === id)
  if (!property) return {}
  return {
    title: `${property.name} — RØFE Living`,
    description: property.shortDescription,
  }
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property || property.status === 'coming-soon') {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-rofe-ash hover:text-rofe-basalt transition-colors text-sm tracking-[0.1em] uppercase"
          style={{ fontWeight: 300 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 aspect-[16/9] overflow-hidden relative">
            <Image
              src={property.images[0]}
              alt={`${property.name} — main photo`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="flex flex-col gap-3">
            {property.images.slice(1, 3).map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden flex-1">
                <Image
                  src={img}
                  alt={`${property.name} — photo ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-rofe-drift mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-xs tracking-[0.15em] uppercase" style={{ fontWeight: 300 }}>
                  {property.location}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl text-rofe-basalt tracking-[0.04em] mb-2"
                style={{ fontWeight: 200 }}
              >
                {property.name}
              </h1>
              <p
                className="text-sm text-rofe-drift uppercase tracking-[0.1em]"
                style={{ fontWeight: 300 }}
              >
                {property.type}
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
                    {property.bedrooms}
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
                    {property.bathrooms}
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
                    {property.maxGuests}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl mb-5 text-rofe-basalt tracking-[0.04em]"
                style={{ fontWeight: 200 }}
              >
                About This Property
              </h2>
              <p className="text-rofe-ash leading-relaxed" style={{ fontWeight: 300 }}>
                {property.description}
              </p>
            </div>

            {property.amenities.length > 0 && (
              <div>
                <h2
                  className="text-2xl mb-5 text-rofe-basalt tracking-[0.04em]"
                  style={{ fontWeight: 200 }}
                >
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
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
              {property.bookingIframeUrl ? (
                <iframe
                  src={property.bookingIframeUrl}
                  title={`Book ${property.name}`}
                  className="w-full border-0"
                  style={{ height: '680px' }}
                  loading="lazy"
                />
              ) : (
                <div className="bg-rofe-warm border border-rofe-cream p-8 text-center">
                  <p className="text-rofe-ash text-sm mb-4" style={{ fontWeight: 300 }}>
                    Contact us to book this property
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-rofe-basalt text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors"
                    style={{ fontWeight: 300 }}
                  >
                    Get in Touch
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
