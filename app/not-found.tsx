'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="editorial-grid min-h-screen">
      <div className="flex flex-col justify-center min-h-[80vh] py-20">
        <div className={`opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
          <p className="text-overline uppercase text-matcha-accent font-medium tracking-widest mb-6">
            Lydia Studio
          </p>

          <h1 className="text-headline font-serif text-nearBlack mb-6 max-w-[16ch]">
            This page wandered off
          </h1>

          <p className="text-body-lg text-muted font-light max-w-[36ch] mb-8">
            It happens. Let's head back to somewhere familiar.
          </p>

          <div className="editorial-hr" />

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-body text-matcha-accent font-medium
                       hover:gap-3 transition-all duration-300 group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
