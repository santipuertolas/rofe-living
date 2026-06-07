interface RestoCardProps {
  name: string
  tags: string[]
  price: string
  desc: string
}

function RestoCard({ name, tags, price, desc }: RestoCardProps) {
  return (
    <div style={{ borderBottom: '1px solid var(--rofe-stone)', padding: '18px 0' }}>
      <div className="text-rofe-cream" style={{ fontWeight: 400, fontSize: '16px', marginBottom: '2px' }}>
        {name}
      </div>
      <div className="flex gap-3 items-center mb-1 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-rofe-white bg-rofe-ash"
            style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '10px' }}
          >
            {tag}
          </span>
        ))}
        <span className="text-rofe-accent" style={{ fontSize: '13px', fontWeight: 400 }}>{price}</span>
      </div>
      <div className="text-rofe-drift" style={{ fontSize: '13px', lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  )
}

interface AreaLabelProps {
  label: string
  first?: boolean
}

function AreaLabel({ label, first }: AreaLabelProps) {
  return (
    <div
      className="text-rofe-drift"
      style={{
        fontSize: '10px',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        margin: first ? '0 0 12px' : '36px 0 12px',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--rofe-stone)',
      }}
    >
      {label}
    </div>
  )
}

export function EatSection() {
  return (
    <section id="eat" className="w-full bg-rofe-basalt py-16">
      <div className="px-6 mx-auto" style={{ maxWidth: '680px' }}>
        <div className="text-rofe-ash mb-2" style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>
          03
        </div>
        <h2
          className="text-rofe-cream mb-6"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, fontSize: '28px', letterSpacing: '4px' }}
        >
          Where to Eat
        </h2>

        <AreaLabel label="Breakfast &amp; Coffee — Arrecife" first />
        <RestoCard name="Siroco" tags={['Specialty Coffee', 'Breakfast']} price="$$" desc="My go-to for breakfast in Arrecife. Excellent specialty coffee, great breakfasts, and adequately priced. You'll probably end up coming back more than once." />
        <RestoCard name="Antipoda" tags={['Specialty Coffee']} price="$" desc="Another excellent specialty coffee spot. They also sell beans — perfect for restocking your AeroPress supply." />
        <RestoCard name="La Mona" tags={['Breakfast']} price="$$" desc="Great for a proper breakfast spread. Relaxed vibe, good portions." />
        <RestoCard name="Lemon Love" tags={['Breakfast']} price="$" desc="Healthy-leaning breakfast spot. Good smoothies and bowls. Dead cheap." />

        <AreaLabel label="Breakfast &amp; Coffee — Worth the Drive" />
        <RestoCard name="Oppa Café — Costa Teguise" tags={['Coffee &amp; Brunch']} price="$$" desc="Lovely atmosphere, well-made coffee, and a solid brunch menu." />
        <RestoCard name="Los Santos Café — San Bartolomé" tags={['Coffee &amp; Pastries']} price="$" desc="Good coffee in a convenient location, though not pure specialty. Toasts, sandwiches, and pastries — great if you're passing through San Bartolomé or biking in the area." />
        <RestoCard name="Kalma Brunch — Puerto del Carmen" tags={['Brunch']} price="$$" desc="Great brunch spot if you're heading south." />

        <AreaLabel label="Arrecife — Spanish &amp; Gastro" />
        <RestoCard name="Gastrobar El Baifo" tags={['Gastro']} price="$$" desc="Our top pick in Arrecife. Creative Canarian dishes, good wines. <strong style='font-weight:400'>Book in advance</strong> — they're almost always fully booked, especially on weekends." />
        <RestoCard name="Bar El Parral" tags={['Spanish Traditional']} price="$" desc="Classic tapas bar. Authentic, no-frills, and everything is good. Where the locals go." />
        <RestoCard name="Bar Picasso · El Almacén" tags={['Spanish · Wine Bar']} price="$$" desc="Inside the old El Almacén cultural centre. Great atmosphere, good tapas, nice wines." />
        <RestoCard name="Katu Wine Bar &amp; Tapas" tags={['Wine Bar · Tapas']} price="$$" desc="Curated wine selection with well-paired tapas. Great for a relaxed evening." />
        <RestoCard name="Barullo Gastrobar" tags={['Gastro']} price="$$" desc="Modern gastro with creative plating. Another strong option in Arrecife's growing food scene." />
        <RestoCard name="Bar Andalucía 1960" tags={['Spanish Traditional']} price="$" desc="Been around since 1960 and it shows — in the best way. Old-school Spanish bar, proper tapas." />

        <AreaLabel label="Arrecife — Other" />
        <RestoCard name="Ocho Burgers" tags={['Burgers']} price="$$" desc="Excellent burgers. Don't overthink it, just go. (Mammud in Tías might disagree — try both and decide for yourself.)" />
        <RestoCard name="La Lupe Cantina" tags={['Mexican']} price="$$" desc="Solid Mexican food in Arrecife. Good cocktails too." />

        <AreaLabel label="Around the Island" />
        <RestoCard name="Majo Picón — Tinajo" tags={['Canarian']} price="$$" desc='We have yet to meet someone who didn&apos;t love this place. We go every week and have "forced" all our friends to try it. Trust us.' />
        <RestoCard name="El Barquillo (El Sótano) — La Santa" tags={['Seafood']} price="$$" desc="Fish and seafood, local, underground restaurant. Try the La Santa Shrimp. Tip: if you're alone or with 1–2 people, sit at the bar to skip the queue." />
        <RestoCard name="Mamma Mi — Playa Honda" tags={['Italian']} price="$$" desc="Great Italian food, surprisingly authentic." />
        <RestoCard name="Teleclub de Tao — Tao" tags={['Canarian Home Cooking']} price="$" desc="Huge portions, ridiculously cheap, grandma-style cooking in a village social club. An experience. Amazing place." />
        <RestoCard name="Vegacosta — Tinajo" tags={['Canarian']} price="$$" desc="Another excellent Canarian restaurant in Tinajo." />
        <RestoCard name="De Frente al Mar — Famara" tags={['Seafood']} price="$$" desc="Right on the Famara beachfront. Perfect after a surf session or beach day." />
        <RestoCard name="Mammud — Tías" tags={['Burgers &amp; Steak']} price="$$" desc="The best burgers on the island — yes, even better than Ocho. Great steaks too. Worth the drive south." />
        <RestoCard name="Grill Los Cascajos — Haría" tags={['Grill · Meat']} price="$" desc="Great for steaks after hiking in the north. Very cheap, local meats. Don't look at the Google Maps ratings, you'll miss out otherwise!" />
        <RestoCard name="Bar La Piscina Pichón — Punta Mujeres" tags={['Seafood · Beach Bar']} price="$$" desc="Right next to the natural ocean pool. Fresh fish, incredible setting." />
        <RestoCard name="Coentro — Puerto Calero" tags={['Gastro · Creative']} price="$$$" desc="Creative cuisine in the marina. Beautiful presentation, great flavours." />
        <div style={{ borderBottom: 'none', padding: '18px 0' }}>
          <div className="text-rofe-cream" style={{ fontWeight: 400, fontSize: '16px', marginBottom: '2px' }}>
            La Tegala — Tías
          </div>
          <div className="flex gap-3 items-center mb-1 flex-wrap">
            <span className="text-rofe-white bg-rofe-ash" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '10px' }}>
              Fine Dining
            </span>
            <span className="text-rofe-accent" style={{ fontSize: '13px', fontWeight: 400 }}>$$$$</span>
          </div>
          <div className="text-rofe-drift" style={{ fontSize: '13px', lineHeight: 1.7 }}>
            If you want one special dinner on the island, this is it. Refined Canarian gastronomy.
          </div>
        </div>
      </div>
    </section>
  )
}
