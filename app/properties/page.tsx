import { PropertyCard } from '@/components/PropertyCard'
import { properties } from '@/lib/properties'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Properties — RØFE Living',
  description:
    'Browse our collection of vacation rentals in Lanzarote. Currently available: RØFE La Santa. More properties coming soon.',
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Header */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-rofe-warm">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase text-rofe-drift mb-4"
            style={{ fontWeight: 300 }}
          >
            Our Collection
          </p>
          <h1
            className="text-4xl md:text-6xl text-rofe-basalt tracking-[0.04em]"
            style={{ fontWeight: 200 }}
          >
            Properties
          </h1>
          <p
            className="text-lg text-rofe-ash max-w-xl mx-auto mt-6"
            style={{ fontWeight: 300 }}
          >
            Curated stays in Lanzarote, each rooted in the authentic character of the island
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
