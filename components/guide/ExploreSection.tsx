interface PlaceCardProps {
  name: string
  desc: React.ReactNode
}

function PlaceCard({ name, desc }: PlaceCardProps) {
  return (
    <div className="bg-rofe-warm rounded-xl mb-3" style={{ padding: '20px 24px' }}>
      <div className="text-rofe-basalt mb-1" style={{ fontWeight: 400, fontSize: '15px' }}>
        {name}
      </div>
      <div className="text-rofe-ash" style={{ fontSize: '13px', lineHeight: 1.7 }}>
        {desc}
      </div>
    </div>
  )
}

function MapsLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-rofe-accent no-underline hover:underline"
      style={{ fontSize: '12px' }}
    >
      {label}
    </a>
  )
}

export function ExploreSection() {
  return (
    <section id="explore" className="px-6 py-16 mx-auto" style={{ maxWidth: '680px' }}>
      <div className="text-rofe-drift mb-2" style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>
        04
      </div>
      <h2
        className="text-rofe-basalt mb-6"
        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, fontSize: '28px', letterSpacing: '4px' }}
      >
        Explore
      </h2>

      <h3 className="text-rofe-basalt mt-9 mb-3" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Beaches
      </h3>
      <PlaceCard
        name="Playa del Reducto"
        desc="Your local beach — 5 minutes on foot. Golden sand, calm water, Arrecife promenade. Perfect for a quick swim or morning walk."
      />
      <PlaceCard
        name="Playa de Famara"
        desc={<>The island&apos;s most dramatic beach. Wild Atlantic waves, Risco de Famara cliffs behind you. 25-minute drive.<br /><strong style={{ fontWeight: 400 }}>Tip:</strong> Drive past the Bungalows for a more peaceful stretch with better waves for surfing.</>}
      />
      <PlaceCard
        name="Playas de Papagayo"
        desc={<>Postcard beaches in the south. Crystal clear turquoise water, sheltered coves. 35-minute drive.<br /><strong style={{ fontWeight: 400 }}>Tip:</strong> Skip the main beach and head to the beach by the campsite — much less crowded.</>}
      />
      <PlaceCard
        name="Playa del Risco"
        desc={<>A 45-minute hike down the mountain. You won&apos;t regret it — until you start hiking back up. One of the most beautiful beaches in the Canaries. You&apos;ll probably be alone.<br /><MapsLink href="https://maps.app.goo.gl/XnqKoVh2AaRErUCW9" label="📍 Parking to start the hike" /></>}
      />

      <h3 className="text-rofe-basalt mt-9 mb-3" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Volcanic Landscapes
      </h3>
      <PlaceCard
        name="Timanfaya National Park"
        desc={<>The Fire Mountains. Surreal lunar landscape from the 1730s eruptions. The bus tour through the lava fields is included in the entry fee. Book online in advance.<br /><strong style={{ fontWeight: 400 }}>Note:</strong> The main tourist attraction on the island — expect queues and crowds, but seeing the lava fields first hand is impressive regardless.</>}
      />
      <PlaceCard
        name="Pico Partido"
        desc={<>A hike through a lava flow that literally split a mountain in two — hence the name. Park, then follow a path through the lava for ~300m to the bottom of the flow that divided the peak. You&apos;ll be pretty much alone.<br /><MapsLink href="https://maps.app.goo.gl/7kEyGQ2KzLSYpTPMA" label="📍 Parking &amp; trailhead" /></>}
      />

      <h3 className="text-rofe-basalt mt-9 mb-3" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Towns &amp; Markets
      </h3>
      <PlaceCard
        name="La Recova Saturday Market — Arrecife"
        desc="Every Saturday morning, 10-minute walk. Fresh produce, Canarian cheeses, artisan food products. The real local market."
      />
      <PlaceCard
        name="Teguise Sunday Market"
        desc="The biggest market on the island, every Sunday in the old capital. It's a bit of a tourist trap and gets very crowded, but the town comes alive and it's great for a stroll."
      />
      <PlaceCard
        name="Haría Saturday Market"
        desc='Smaller, local, in the "valley of a thousand palms." Great artisan food. Combine with a drive through the north.'
      />
      <PlaceCard
        name="Charco de San Ginés"
        desc="5-minute walk. The tidal lagoon at the heart of Arrecife, surrounded by whitewashed fishermen's houses. Beautiful at sunset."
      />

      <h3 className="text-rofe-basalt mt-9 mb-3" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Viewpoints
      </h3>
      <PlaceCard
        name="Mirador del Río"
        desc="Designed by César Manrique, perched on 500m cliffs. Views across to La Graciosa. Unforgettable."
      />
      <PlaceCard
        name="Mirador de El Risco de Famara"
        desc="Insane views. You can hike all around the risco cliffs. One of our favourite spots."
      />
      <PlaceCard
        name="Mirador El Bosquecillo"
        desc="Lesser-known, panoramic views. Much quieter — you'll likely have it to yourself."
      />
      <PlaceCard
        name="Cueva de las Cabras"
        desc="A hidden volcanic cave. Not on the tourist trail — ask us for directions."
      />

      <h3 className="text-rofe-basalt mt-9 mb-3" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        César Manrique
      </h3>
      <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
        César Manrique shaped Lanzarote more than anyone. His philosophy — art integrated with nature — is why the island looks the way it does. These are essential visits:
      </p>
      <PlaceCard
        name="Fundación César Manrique"
        desc="The artist's own home, built into five volcanic bubbles. The best starting point for understanding the island."
      />
      <PlaceCard
        name="Jameos del Agua"
        desc="A volcanic tunnel transformed into a surreal underground garden with a lake, concert hall, and blind albino crabs."
      />
      <PlaceCard
        name="Cueva de los Verdes"
        desc="A guided walk through a 1km volcanic tunnel. Dramatic lighting and acoustics — a completely different experience from Jameos."
      />

      <h3 className="text-rofe-basalt mt-9 mb-3" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Activities
      </h3>
      <PlaceCard
        name="Freediving — OceanSoul Freediving School"
        desc="Courses and excursions for all levels. An incredible experience even if you've never tried it."
      />
      <PlaceCard
        name="Surfing — Longboard Gliders Surf School"
        desc="Famara · The best surf school for longboarding. Consistent waves, ideal for beginners and intermediate surfers."
      />
      <PlaceCard
        name="Road Biking"
        desc={<>Rent a bike and explore the island&apos;s incredible cycling routes — or ask us, we love biking ourselves.<br /><MapsLink href="https://maps.app.goo.gl/DDZCn1GYwN25bQqJ6" label="📍 Bike rental in Arrecife" /></>}
      />
      <PlaceCard
        name="Paragliding — Lava Fly Lanzarote"
        desc={<>Tandem flights over volcanic landscapes.<br /><strong style={{ fontWeight: 400 }}>Tip:</strong> Pick a day with little wind, or ask if they&apos;re launching from El Risco de Famara — one of the most spectacular glides of your life.</>}
      />
      <PlaceCard
        name="Wine Tasting — Bodega Cohombrillo"
        desc="Simply the best wine tasting on the island. Most bodegas in La Geria are too touristy — Cohombrillo is the real deal. Fully natural wines, just a few hundred bottles per year. Vines growing in volcanic craters. Book in advance."
      />
      <PlaceCard
        name="Diving — La Graciosa Diving"
        desc="Ferry to La Graciosa and dive the marine reserve. Some of the best diving in the Canaries."
      />
      <PlaceCard
        name="Hiking"
        desc="Pico Partido, Risco de Famara, the Ajaches, the volcanic route through Timanfaya. Ask us for recommendations based on what you're after."
      />
    </section>
  )
}
