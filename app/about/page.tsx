import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — RØFE Living',
  description:
    'The story behind RØFE Living — named after the traditional volcanic stone of the Canary Islands, bringing authenticity and connection to the land into modern hospitality.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1598352103173-7556a25673c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjBibGFjayUyMHNhbmQlMjBiZWFjaCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcyMTMxNjgyfDA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Lanzarote Landscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-rofe-basalt/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-rofe-cream">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 text-rofe-cream/60"
            style={{ fontWeight: 300 }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl tracking-[0.04em]"
            style={{ fontWeight: 200 }}
          >
            About RØFE Living
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <svg
              width="48"
              height="54"
              viewBox="0 0 32 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-8"
            >
              <path d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z" stroke="#A39E97" strokeWidth="1" fill="none" />
              <path d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z" stroke="#A39E97" strokeWidth="0.75" fill="none" />
            </svg>
          </div>
          <div className="space-y-8 text-rofe-ash leading-relaxed" style={{ fontWeight: 300 }}>
            <p className="text-lg text-rofe-basalt text-center" style={{ fontWeight: 200 }}>
              RØFE — named after the traditional volcanic stone (<em>rofe</em> or <em>picón</em>) of
              the Canary Islands, used for centuries in agriculture to retain moisture in arid volcanic soil.
            </p>
            <div className="w-12 h-[1px] bg-rofe-cream mx-auto" />
            <p>
              Our hexagonal mark references the geometric basalt columns and dry-stone <em>gavias</em> —
              walled agricultural enclosures — that define the Canarian landscape. RØFE Living brings
              this spirit of authenticity and connection to the land into a modern, minimalist hospitality
              experience.
            </p>
            <p>
              We are building a curated portfolio of exclusive properties, each selected and designed
              to offer guests an unparalleled experience — combining contemporary design with the
              distinctive volcanic landscape and coastal charm that defines Lanzarote.
            </p>
            <p>
              Our properties are more than places to stay. They are carefully crafted spaces that
              celebrate the island's unique character while providing all the modern comforts you need
              for a truly memorable stay.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-rofe-warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] uppercase text-rofe-drift mb-4"
              style={{ fontWeight: 300 }}
            >
              What We Believe
            </p>
            <h2
              className="text-4xl text-rofe-basalt tracking-[0.04em]"
              style={{ fontWeight: 200 }}
            >
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Excellence',
                text: 'We maintain the highest standards in every aspect of our service, from property selection and design to guest experience and support.',
              },
              {
                title: 'Authenticity',
                text: "Our properties celebrate Lanzarote's unique character, offering genuine experiences that connect guests with the island's culture and natural beauty.",
              },
              {
                title: 'Hospitality',
                text: 'Personalized, attentive service that anticipates your needs and exceeds expectations throughout your stay on the island.',
              },
            ].map(({ title, text }) => (
              <div key={title} className="text-center">
                <div className="w-[1px] h-10 bg-rofe-drift/40 mx-auto mb-6" />
                <h3 className="text-lg mb-4 text-rofe-basalt tracking-[0.05em]" style={{ fontWeight: 200 }}>
                  {title}
                </h3>
                <p className="text-rofe-ash text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lanzarote */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-rofe-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-rofe-drift mb-4"
                style={{ fontWeight: 300 }}
              >
                The Island
              </p>
              <h2
                className="text-4xl mb-8 text-rofe-basalt tracking-[0.04em]"
                style={{ fontWeight: 200 }}
              >
                Why Lanzarote?
              </h2>
              <div className="space-y-5 text-rofe-ash leading-relaxed" style={{ fontWeight: 300 }}>
                <p>
                  Lanzarote is unlike any other destination in the world. This UNESCO Biosphere
                  Reserve captivates visitors with its otherworldly volcanic landscapes, pristine
                  beaches, and unique architectural heritage shaped by the visionary artist César
                  Manrique.
                </p>
                <p>
                  The island offers perfect year-round weather, world-class surfing, exceptional
                  dining, and a vibrant cultural scene — all while maintaining an intimate, authentic
                  character that sets it apart from more crowded destinations.
                </p>
                <p>
                  For discerning travelers, Lanzarote represents the perfect balance: sophisticated
                  enough to meet high standards, yet unspoiled enough to offer genuine adventure and
                  discovery.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1673746214924-6ccd171a2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGJlYWNoJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lanzarote"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-rofe-basalt text-rofe-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 text-rofe-ash"
            style={{ fontWeight: 300 }}
          >
            Experience
          </p>
          <h2
            className="text-4xl mb-8 tracking-[0.04em]"
            style={{ fontWeight: 200 }}
          >
            Discover the RØFE Living Difference
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="px-8 py-3.5 bg-rofe-cream text-rofe-basalt text-sm tracking-[0.15em] uppercase hover:bg-rofe-warm transition-colors"
              style={{ fontWeight: 300 }}
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-rofe-ash/30 text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors"
              style={{ fontWeight: 300 }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
