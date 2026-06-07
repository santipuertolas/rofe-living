export function GuideNav() {
  return (
    <nav className="sticky top-0 z-[100] bg-rofe-basalt">
      <div className="flex items-center justify-between px-6 py-4 flex-wrap gap-y-2 sm:flex-nowrap">
        <a
          href="/"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 100, letterSpacing: '6px' }}
          className="text-rofe-cream text-[18px] no-underline"
        >
          RØFE
        </a>
        <div className="flex gap-1 overflow-x-auto scrollbar-hide w-full sm:w-auto pb-1 sm:pb-0 -mb-1 sm:mb-0">
          {[
            { href: '#space', label: 'Your Space' },
            { href: '#building', label: 'RØFE Arrecife' },
            { href: '#eat', label: 'Eat' },
            { href: '#explore', label: 'Explore' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-rofe-drift no-underline px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:text-rofe-cream hover:bg-rofe-stone"
              style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
