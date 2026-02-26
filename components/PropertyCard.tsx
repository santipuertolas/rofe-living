import Link from 'next/link'
import Image from 'next/image'
import { Bed, Bath, Users, MapPin } from 'lucide-react'
import { Property } from '@/lib/properties'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  if (property.status === 'coming-soon') {
    return (
      <div className="overflow-hidden bg-rofe-white">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt="Coming Soon"
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-rofe-basalt/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg
                width="36"
                height="40"
                viewBox="0 0 32 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-3"
              >
                <path
                  d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z"
                  stroke="#E8E4DF"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
              <p
                className="text-rofe-cream text-xs tracking-[0.25em] uppercase"
                style={{ fontWeight: 300 }}
              >
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 border border-t-0 border-rofe-cream/60">
          <div className="flex items-center gap-2 text-sm text-rofe-drift mb-3" style={{ fontWeight: 300 }}>
            <MapPin className="w-3.5 h-3.5" />
            <span className="tracking-[0.1em] uppercase text-xs">{property.location}</span>
          </div>
          <h3
            className="text-xl tracking-[0.05em] mb-1 text-rofe-drift"
            style={{ fontWeight: 200 }}
          >
            New Property
          </h3>
          <p
            className="text-xs text-rofe-drift/60 uppercase tracking-[0.1em] mb-4"
            style={{ fontWeight: 300 }}
          >
            {property.type}
          </p>
          <p className="text-rofe-drift/80 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
            {property.shortDescription}
          </p>
          <div className="mt-5 pt-4 border-t border-rofe-cream">
            <Link
              href="/contact"
              className="text-xs tracking-[0.15em] uppercase text-rofe-ash hover:text-rofe-basalt transition-colors"
              style={{ fontWeight: 300 }}
            >
              Join the waitlist →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link href={`/properties/${property.id}`} className="group">
      <div className="overflow-hidden bg-rofe-white hover:shadow-lg transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div
            className="flex items-center gap-2 text-sm text-rofe-drift mb-3"
            style={{ fontWeight: 300 }}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span className="tracking-[0.1em] uppercase text-xs">{property.location}</span>
          </div>

          <h3
            className="text-xl tracking-[0.05em] mb-1 text-rofe-basalt group-hover:text-rofe-stone transition-colors"
            style={{ fontWeight: 200 }}
          >
            {property.name}
          </h3>
          <p
            className="text-xs text-rofe-drift uppercase tracking-[0.1em] mb-4"
            style={{ fontWeight: 300 }}
          >
            {property.type}
          </p>

          <p
            className="text-rofe-ash text-sm mb-5 line-clamp-2 leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            {property.shortDescription}
          </p>

          {/* Features */}
          <div className="flex items-center gap-5 text-sm text-rofe-ash border-t border-rofe-cream pt-4">
            <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
              <Bed className="w-4 h-4 text-rofe-drift" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
              <Bath className="w-4 h-4 text-rofe-drift" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
              <Users className="w-4 h-4 text-rofe-drift" />
              <span>{property.maxGuests}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
