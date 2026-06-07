export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 mx-auto" style={{ maxWidth: '680px' }}>
      <div className="text-rofe-drift mb-2" style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>
        05
      </div>
      <h2
        className="text-rofe-basalt mb-6"
        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, fontSize: '28px', letterSpacing: '4px' }}
      >
        Contact Us
      </h2>
      <p className="text-rofe-basalt mb-4" style={{ fontSize: '15px', lineHeight: 1.8 }}>
        We&apos;re here if you need anything — a restaurant reservation, a recommendation, help with the apartment. Don&apos;t hesitate.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <a
          href="tel:+34607070022"
          className="bg-rofe-warm rounded-xl text-center no-underline text-rofe-basalt transition-colors duration-200 hover:bg-rofe-cream"
          style={{ padding: '20px' }}
        >
          <div style={{ fontWeight: 400, fontSize: '14px', marginBottom: '4px' }}>Santiago</div>
          <div className="text-rofe-ash" style={{ fontSize: '13px' }}>+34 607 070 022</div>
        </a>
        <a
          href="tel:+34680452014"
          className="bg-rofe-warm rounded-xl text-center no-underline text-rofe-basalt transition-colors duration-200 hover:bg-rofe-cream"
          style={{ padding: '20px' }}
        >
          <div style={{ fontWeight: 400, fontSize: '14px', marginBottom: '4px' }}>Jemina</div>
          <div className="text-rofe-ash" style={{ fontSize: '13px' }}>+34 680 452 014</div>
        </a>
      </div>
      <p className="text-rofe-ash text-center mt-6" style={{ fontSize: '13px' }}>
        You can also message us through Airbnb anytime.
      </p>
    </section>
  )
}
