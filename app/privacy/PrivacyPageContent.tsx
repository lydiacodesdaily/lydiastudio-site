'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PrivacyPageContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="editorial-grid min-h-screen pb-20">
      {/* Header */}
      <header className={`relative pt-24 md:pt-40 pb-12 md:pb-16 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
        <Link
          href="/"
          className="inline-block text-caption text-muted hover:text-accent transition-colors duration-200 mb-8"
        >
          ← Back to Lydia Studio
        </Link>
        <h1 className="text-display text-nearBlack mb-4">Privacy Policy</h1>
        <p className="text-subhead text-muted max-w-2xl">
          How Lydia Studio products handle your data.
        </p>
      </header>

      {/* Introduction */}
      <section className={`pb-12 md:pb-16 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}>
        <p className="text-body-lg text-nearBlack mb-6">
          Lydia Studio builds tools designed to respect your privacy. Our products are made to help you focus and work better, not to collect your information.
        </p>
        <p className="text-body text-muted">
          Data practices vary by product and are described in the sections below. We update this page as our products evolve.
        </p>
      </section>

      <hr className="editorial-hr mb-12 md:mb-16" />

      {/* Global Statement */}
      <section className={`pb-12 md:pb-16 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
        <h2 className="text-headline text-nearBlack mb-6">Our Commitments</h2>
        <p className="text-body text-muted mb-6">
          These principles apply to all Lydia Studio products:
        </p>
        <ul className="space-y-3 text-body text-nearBlack">
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">•</span>
            <span>We do not sell user data.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">•</span>
            <span>We do not use user data for advertising.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent mt-1">•</span>
            <span>We do not collect more data than needed for a product to function.</span>
          </li>
        </ul>
        <p className="text-body text-muted mt-8">
          Questions about privacy? Contact us at{' '}
          <a
            href="mailto:hello@lydiastud.io"
            className="text-accent hover:text-accent-hover transition-colors duration-200"
          >
            hello@lydiastud.io
          </a>
        </p>
      </section>

      <hr className="editorial-hr mb-12 md:mb-16" />

      {/* Product Sections */}
      <div className={`opacity-0 ${isVisible ? 'animate-fade-in animate-delay-300' : ''}`}>
        <h2 className="text-headline text-nearBlack mb-8">Products</h2>

        {/* Flow Club Companion */}
        <section id="flow-club-companion" className="mb-12 md:mb-16 scroll-mt-24">
          <h3 className="text-subhead text-nearBlack font-medium mb-4">Flow Club Companion</h3>
          <p className="text-body text-muted mb-6">
            A browser extension that enhances Flow Club sessions with audio cues and task management.
          </p>
          <ul className="space-y-3 text-body text-nearBlack">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>Data collection:</strong> None</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>Data sharing:</strong> None</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>Storage:</strong> Settings and task lists are stored locally in the browser using extension storage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>Where it runs:</strong> Only on Flow Club session pages at https://in.flow.club</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>What it reads:</strong> The session timer on the page so audio cues can stay in sync</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span><strong>What it does not do:</strong> Does not transmit data to external servers, does not use analytics, does not track browsing history, does not record keystrokes, clicks, or mouse movement</span>
            </li>
          </ul>
        </section>

        {/* FlowMate */}
        <section id="flowmate" className="mb-12 md:mb-16 scroll-mt-24">
          <h3 className="text-subhead text-nearBlack font-medium mb-4">FlowMate</h3>
          <p className="text-body text-muted mb-6">
            A browser extension for focus and productivity.
          </p>
          <ul className="space-y-3 text-body text-nearBlack">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Privacy details will be updated as the product evolves.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Data practices will be documented here before any public release.</span>
            </li>
          </ul>
        </section>

        {/* JustToday */}
        <section id="justtoday" className="mb-12 md:mb-16 scroll-mt-24">
          <h3 className="text-subhead text-nearBlack font-medium mb-4">JustToday</h3>
          <p className="text-body text-muted mb-6">
            A focused task management tool.
          </p>
          <ul className="space-y-3 text-body text-nearBlack">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Privacy details will be updated as the product evolves.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Data practices will be documented here before any public release.</span>
            </li>
          </ul>
        </section>

        {/* Resources Library */}
        <section id="resources-library" className="mb-12 md:mb-16 scroll-mt-24">
          <h3 className="text-subhead text-nearBlack font-medium mb-4">Resources Library</h3>
          <p className="text-body text-muted mb-6">
            A curated collection of productivity resources.
          </p>
          <ul className="space-y-3 text-body text-nearBlack">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Privacy details will be updated as the product evolves.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Data practices will be documented here before any public release.</span>
            </li>
          </ul>
        </section>
      </div>

      <hr className="editorial-hr mb-12 md:mb-16" />

      {/* Last Updated */}
      <section className={`pb-12 md:pb-16 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-400' : ''}`}>
        <p className="text-caption text-stone">
          Last updated: February 2026
        </p>
      </section>

      {/* Footer */}
      <footer className="pt-16 md:pt-20 pb-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-body-lg text-nearBlack mb-1 font-medium">Lydia Studio</p>
            <p className="text-caption text-stone">Systems that work with you, not against you.</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="text-caption text-accent transition-colors duration-200"
            >
              Privacy
            </Link>
            <a
              href="https://tally.so/r/Y50Qb5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="https://github.com/lydiacodesdaily/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lydiakwag/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
