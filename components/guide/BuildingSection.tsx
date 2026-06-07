import type { Unit } from '@/lib/guideData'

interface BuildingSectionProps {
  unit: Unit
}

const terraceNoteByUnit: Record<Unit, string | null> = {
  calima: 'CALIMA also has its own private terrace (~50 m²) with no time restrictions.',
  mojo: 'CALIMA has its own private terrace. MOJO has a private balcony overlooking the street.',
  picon: null,
}

export function BuildingSection({ unit }: BuildingSectionProps) {
  const terraceNote = terraceNoteByUnit[unit]

  return (
    <section id="building" className="w-full bg-rofe-warm py-16">
      <div className="px-6 mx-auto" style={{ maxWidth: '680px' }}>
        <div className="text-rofe-drift mb-2" style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>
          02
        </div>
        <h2
          className="text-rofe-basalt mb-6"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, fontSize: '28px', letterSpacing: '4px' }}
        >
          RØFE Arrecife
        </h2>

        <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
          RØFE Arrecife is a small building at Calle Fajardo 11 in the heart of Arrecife, home to three individually designed apartments — CALIMA, MOJO, and PICÓN — each named after an element of Canarian culture. The entire building is exclusively for RØFE guests.
        </p>
        <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
          Our aim is to blend authentic Canarian character with clean, modern design — spaces that feel considered but never fussy. We hope you feel at home.
        </p>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          Shared Terrace
        </h3>
        <div className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
          <p className="text-rofe-basalt mb-3" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            The rooftop has a <strong style={{ fontWeight: 400 }}>shared terrace</strong> (~50 m²) with sun loungers and a large dining table, open to all three apartments. Please use between <strong style={{ fontWeight: 400 }}>8:00 and 21:00</strong>.
          </p>
          {terraceNote && (
            <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
              {terraceNote}
            </p>
          )}
        </div>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          Laundry Room
        </h3>
        <div className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
          <p className="text-rofe-basalt mb-3" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            On the <strong style={{ fontWeight: 400 }}>first floor, towards the end of the corridor</strong>. Inside you&apos;ll find:
          </p>
          <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
            <strong style={{ fontWeight: 400 }}>Washing machine</strong> — shared between the three apartments. We ask for conscious use.<br />
            <strong style={{ fontWeight: 400 }}>Clothes drying rack</strong> — please fold and return to the room when done.<br />
            <strong style={{ fontWeight: 400 }}>Mop &amp; brush</strong> — available for use, please return after.
          </p>
        </div>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          House Rules
        </h3>
        <div className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
          <p className="text-rofe-basalt mb-3" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            <strong style={{ fontWeight: 400 }}>Check-in</strong> from 15:00 · <strong style={{ fontWeight: 400 }}>Checkout</strong> by 11:00
          </p>
          <p className="text-rofe-basalt mb-3" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            <strong style={{ fontWeight: 400 }}>Shared terrace:</strong> 8:00 – 21:00
          </p>
          <p className="text-rofe-basalt mb-3" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            <strong style={{ fontWeight: 400 }}>No smoking</strong> inside the apartments. Smoking is permitted on the terraces — please pick up all cigarette butts and clean up after yourself.
          </p>
          <p className="text-rofe-basalt mb-3" style={{ fontSize: '15px', lineHeight: 1.8 }}>
            <strong style={{ fontWeight: 400 }}>Quiet hours</strong> after 22:00
          </p>
          <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
            <strong style={{ fontWeight: 400 }}>No parties or events</strong>
          </p>
        </div>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          Getting Around
        </h3>

        {[
          {
            label: '🚶 On Foot',
            text: 'Arrecife is very walkable — the beach, restaurants, coffee shops, and supermarkets are all within a 5–10 minute walk.',
          },
          {
            label: '🚗 By Car',
            text: 'To explore the rest of Lanzarote (Timanfaya, Famara, the north), a rental car is highly recommended. The island is small — nowhere is more than 40 minutes away.',
          },
        ].map(({ label, text }) => (
          <div key={label} className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
            <div className="text-rofe-basalt mb-2" style={{ fontSize: '14px', fontWeight: 400 }}>{label}</div>
            <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>{text}</p>
          </div>
        ))}

        <div className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
          <div className="text-rofe-basalt mb-2" style={{ fontSize: '14px', fontWeight: 400 }}>🚌 By Bus</div>
          <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
            The Arrecife bus terminal (Estación de Guaguas) is a short walk away. Useful for day trips without a car.<br />
            <a href="https://www.intercitybuslanzarote.es" target="_blank" rel="noopener noreferrer" className="text-rofe-accent no-underline hover:underline" style={{ fontSize: '12px' }}>
              🔗 Routes &amp; timetables
            </a>
          </p>
        </div>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          Parking
        </h3>

        <div className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
          <div className="text-rofe-basalt mb-2" style={{ fontSize: '14px', fontWeight: 400 }}>
            RØFE Arrecife Reserved Parking · €5/night
          </div>
          <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
            We have 2 reserved spots at Parking La Oca, 100m from the apartment. Must be <strong style={{ fontWeight: 400 }}>pre-arranged with us</strong> before arrival.<br />
            <a href="https://maps.app.goo.gl/jrMByvsSNUxWaxVw5" target="_blank" rel="noopener noreferrer" className="text-rofe-accent no-underline hover:underline" style={{ fontSize: '12px' }}>
              📍 Parking La Oca
            </a>
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 mb-4" style={{ background: 'var(--rofe-white)' }}>
          <div className="text-rofe-basalt mb-2" style={{ fontSize: '14px', fontWeight: 400 }}>Free Alternatives</div>
          <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
            Free street parking is available around Arrecife (limited). Public car parks nearby:<br />
            <a href="https://maps.app.goo.gl/asPvJp6qChMFX7Bb8" target="_blank" rel="noopener noreferrer" className="text-rofe-accent no-underline hover:underline" style={{ fontSize: '12px' }}>
              📍 Public parking 1
            </a>
            {' · '}
            <a href="https://maps.app.goo.gl/ZJTbHH5i6p9c4Uu66" target="_blank" rel="noopener noreferrer" className="text-rofe-accent no-underline hover:underline" style={{ fontSize: '12px' }}>
              📍 Public parking 2
            </a>
          </p>
        </div>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          Airport
        </h3>
        <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
          Lanzarote Airport (ACE) is a 10-minute drive from RØFE Arrecife. Taxis are readily available at the terminal.
        </p>

        <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
          Essentials
        </h3>
        <div className="bg-white rounded-xl p-6" style={{ background: 'var(--rofe-white)' }}>
          <p className="text-rofe-basalt" style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: 0 }}>
            <strong style={{ fontWeight: 400 }}>SuperDino</strong> — walking distance{' '}
            <a href="https://maps.app.goo.gl/QxXffiufBTesuXty8" target="_blank" rel="noopener noreferrer" className="text-rofe-accent no-underline hover:underline" style={{ fontSize: '12px' }}>
              📍 Maps
            </a><br />
            <strong style={{ fontWeight: 400 }}>Mercadona / LIDL</strong> — 5-minute drive (Argana), for bigger shops<br />
            <strong style={{ fontWeight: 400 }}>Pharmacies</strong> — several in central Arrecife, look for the green cross<br />
            <strong style={{ fontWeight: 400 }}>Emergency:</strong> 112
          </p>
        </div>
      </div>
    </section>
  )
}
