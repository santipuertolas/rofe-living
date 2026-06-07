import type { UnitData } from '@/lib/guideData'

interface SpaceSectionProps {
  data: UnitData
}

export function SpaceSection({ data }: SpaceSectionProps) {
  return (
    <section id="space" className="px-6 py-16 mx-auto" style={{ maxWidth: '680px' }}>
      <div className="text-rofe-drift mb-2" style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>
        01
      </div>
      <h2
        className="text-rofe-basalt mb-6"
        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, fontSize: '28px', letterSpacing: '4px' }}
      >
        Your Space
      </h2>

      {data.descriptionParagraphs.map((p, i) => (
        <p key={i} className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
          {p}
        </p>
      ))}

      <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Getting In
      </h3>
      <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
        {data.accessIntro}
      </p>

      <div className="bg-rofe-warm rounded-xl p-6 mb-4" style={{ fontSize: '14px', lineHeight: 2.2 }}>
        {data.accessSteps.map((step, i) => (
          <p key={i} className={i < data.accessSteps.length - 1 ? 'mb-4' : ''}>
            <strong style={{ fontWeight: 400 }}>{step.door}</strong>
            <br />
            <span className="text-rofe-ash">{step.instruction}</span>
          </p>
        ))}
      </div>

      {data.accessNote && (
        <p className="text-rofe-ash mb-4" style={{ fontSize: '13px', lineHeight: 1.8 }}>
          {data.accessNote}
        </p>
      )}

      <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Wi-Fi
      </h3>
      <div
        className="bg-rofe-basalt text-rofe-cream text-center my-5"
        style={{ borderRadius: '14px', padding: '28px' }}
      >
        <div className="text-rofe-ash mb-1" style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Network
        </div>
        <div
          className="text-rofe-cream mb-4"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '22px', letterSpacing: '4px' }}
        >
          RØFE Arrecife
        </div>
        <div className="text-rofe-ash mb-1" style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Password
        </div>
        <div
          className="text-rofe-cream mb-4"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: '22px', letterSpacing: '4px' }}
        >
          R0FE_2021
        </div>
        <div className="text-rofe-ash" style={{ fontSize: '12px' }}>
          300 Mbps fibre — rock solid for video calls &amp; remote work
        </div>
      </div>

      <h3 className="text-rofe-basalt mt-9 mb-2" style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}>
        Making Coffee
      </h3>
      <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
        Here&apos;s how to get the best out of the AeroPress setup we&apos;ve left you.
      </p>

      <div
        className="bg-rofe-basalt text-rofe-cream my-5"
        style={{ borderRadius: '14px', padding: '32px 28px' }}
      >
        <div className="mb-5">
          {[
            { val: '11.5g', unit: 'Coffee' },
            { val: '200g', unit: 'Water' },
            { val: '85°C', unit: 'Temp' },
            { val: '2:30', unit: 'Total' },
          ].map(({ val, unit }) => (
            <span key={unit} className="inline-block text-center mr-6 mb-4">
              <span
                className="block text-rofe-cream"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, fontSize: '28px' }}
              >
                {val}
              </span>
              <span
                className="text-rofe-ash"
                style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase' }}
              >
                {unit}
              </span>
            </span>
          ))}
        </div>

        <h3
          className="text-rofe-cream mb-2"
          style={{ fontWeight: 400, fontSize: '16px', letterSpacing: '1px', marginTop: 0 }}
        >
          AeroPress Recipe
        </h3>

        {[
          'Grind 11.5g of coffee to medium-fine (like table salt). On the hand grinder, around 12–14 clicks from fully closed.',
          <>Set the gooseneck kettle to <strong style={{ fontWeight: 400 }}>85°C</strong> and let it heat up.</>,
          'Place a paper filter in the AeroPress cap and rinse it with hot water. Attach the cap to the chamber and set it on your mug.',
          'Add coffee to the chamber. Place everything on the scale and tare to zero.',
          <>Start a timer. Pour <strong style={{ fontWeight: 400 }}>200g</strong> of water slowly and evenly over the grounds.</>,
          'Stir gently 3–4 times. Place the plunger on top and pull up slightly to create a seal (this stops the coffee from dripping through).',
          <>At <strong style={{ fontWeight: 400 }}>2:00</strong>, press down slowly for about 30 seconds. Stop when you hear a hiss.</>,
          'Enjoy. Tastes bitter? Grind coarser. Sour? Grind finer.',
        ].map((step, i) => (
          <div key={i} className="flex items-start mb-3.5">
            <span
              className="flex-shrink-0 flex items-center justify-center rounded-full text-rofe-basalt bg-rofe-cream mr-3"
              style={{ width: '28px', height: '28px', fontSize: '12px', fontWeight: 400 }}
            >
              {i + 1}
            </span>
            <p className="text-rofe-cream" style={{ fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
              {step}
            </p>
          </div>
        ))}
      </div>

      <p className="text-rofe-ash" style={{ fontSize: '13px' }}>
        Need more beans? Antipoda and Siroco in Arrecife sell excellent specialty coffee.
      </p>
    </section>
  )
}
