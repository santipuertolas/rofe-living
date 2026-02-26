import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-rofe-white">
      <div className="text-center">
        <svg width="64" height="72" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8">
          <path d="M16 1L30 9.5V26.5L16 35L2 26.5V9.5L16 1Z" stroke="#A39E97" strokeWidth="1" fill="none" />
          <path d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z" stroke="#A39E97" strokeWidth="0.75" fill="none" />
        </svg>
        <h1 className="text-7xl md:text-8xl mb-4 text-rofe-basalt tracking-[0.06em]" style={{ fontWeight: 200 }}>404</h1>
        <h2 className="text-xl md:text-2xl mb-6 text-rofe-drift tracking-[0.04em]" style={{ fontWeight: 200 }}>
          Page Not Found
        </h2>
        <p className="text-rofe-ash mb-10 max-w-md mx-auto text-sm leading-relaxed" style={{ fontWeight: 300 }}>
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-rofe-basalt text-rofe-cream text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors"
          style={{ fontWeight: 300 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
