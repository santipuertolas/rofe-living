interface GuideHeroProps {
  unitName: string
}

export function GuideHero({ unitName }: GuideHeroProps) {
  return (
    <div className="bg-rofe-basalt text-rofe-cream text-center px-6 pt-20 pb-16">
      <div
        className="inline-block opacity-60 mb-8"
        style={{ width: '2px', height: '50px', background: 'var(--rofe-cream)', transform: 'rotate(-33deg)' }}
      />
      <h1
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 100,
          fontSize: '42px',
          letterSpacing: '14px',
          marginBottom: '8px',
        }}
      >
        {unitName}
      </h1>
      <div
        className="text-rofe-ash mb-8"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 100,
          fontSize: '13px',
          letterSpacing: '8px',
        }}
      >
        RØFE ARRECIFE
      </div>
      <p
        className="text-rofe-drift mx-auto"
        style={{ maxWidth: '520px', fontSize: '15px', lineHeight: 1.9 }}
      >
        Welcome to your stay. We&apos;re Santiago &amp; Jemina, and we&apos;re delighted to host you at RØFE Arrecife. This guide has everything you need — from how to get in, to where to find the best coffee and the island&apos;s hidden spots. Enjoy Lanzarote.
      </p>
    </div>
  )
}
