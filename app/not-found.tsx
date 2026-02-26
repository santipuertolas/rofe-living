import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-rofe-white">
      <div className="text-center px-6">
        <svg
          width="48"
          height="54"
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-8"
        >
          <path d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z" stroke="#A39E97" strokeWidth="1" fill="none" />
        </svg>
        <h1 className="text-4xl mb-4 text-rofe-basalt tracking-[0.04em]" style={{ fontWeight: 200 }}>
          Page Not Found
        </h1>
        <p className="text-rofe-ash text-sm mb-8" style={{ fontWeight: 300 }}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="text-sm tracking-[0.15em] uppercase text-rofe-ash hover:text-rofe-basalt transition-colors"
          style={{ fontWeight: 300 }}
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
