'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import NewsletterCtaBand from '@/components/NewsletterCtaBand';

export default function FlowClubCompanion() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="editorial-grid min-h-screen pb-20">
      {/* Hero Section */}
      <header className={`relative pt-24 md:pt-40 pb-16 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-caption text-muted hover:text-accent transition-colors mb-8"
        >
          <span>←</span> Back to Lydia Studio
        </Link>
        <p className="text-overline uppercase text-accent tracking-widest mb-6">
          Getting Started Guide
        </p>
        <h1 className="text-display text-nearBlack mb-6 max-w-[18ch]">
          Flow Club Companion
        </h1>
        <p className="text-subhead text-muted max-w-[38ch]">
          Gentle audio cues and time awareness for Flow Club sessions.
        </p>
      </header>

      {/* TL;DR Quick Start */}
      <section className={`py-8 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}>
        <div className="bg-accent-light border border-accent/20 rounded-xl p-6 md:p-8">
          <p className="text-caption uppercase tracking-widest text-accent mb-4">Quick Start</p>
          <ol className="space-y-3 text-body text-nearBlack">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">1</span>
              <span>
                <a
                  href="#install"
                  className="text-accent hover:underline font-medium"
                >
                  Install the extension
                </a>
                {' '}(Chrome or Firefox)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">2</span>
              <span>Open a Flow Club session at <a href="https://in.flow.club" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">in.flow.club</a></span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">3</span>
              <span><strong>Refresh the page once</strong> — you should hear a tick sound</span>
            </li>
          </ol>
          <p className="text-caption text-accent mt-4">
            That's it. Scroll down only if you want to customize or troubleshoot.
          </p>
        </div>
      </section>

      {/* Grouped Table of Contents */}
      <nav className={`py-8 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
        <p className="text-caption uppercase tracking-widest text-stone mb-4">Jump to section</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-caption text-accent font-medium mb-2">Setup</p>
            <ul className="space-y-1.5 text-body">
              <li>
                <a href="#install" className="text-muted hover:text-accent transition-colors">
                  Install the Extension
                </a>
              </li>
              <li>
                <a href="#first-session" className="text-muted hover:text-accent transition-colors">
                  Your First Session
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-caption text-accent font-medium mb-2">Reference (read later)</p>
            <ul className="space-y-1.5 text-body">
              <li>
                <a href="#settings" className="text-muted hover:text-accent transition-colors">
                  All Settings Explained
                </a>
              </li>
              <li>
                <a href="#tasks" className="text-muted hover:text-accent transition-colors">
                  Tasks Tab
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="text-muted hover:text-accent transition-colors">
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="editorial-hr" />

      {/* === SETUP SECTION === */}
      <div className="py-4">
        <p className="text-overline uppercase text-accent tracking-widest">
          Setup
        </p>
      </div>

      {/* Install Section */}
      <section id="install" className="py-8">
        <h2 className="text-headline text-nearBlack mb-6">Install the Extension</h2>
        <p className="text-caption text-stone mb-4">Latest version: <strong className="text-nearBlack">v1.1.5</strong></p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/flow-club-chrome_v1.1.5.zip"
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-white rounded-xl
                       hover:bg-accent-hover transition-colors duration-200"
          >
            Get for Chrome (Direct Download)
            <span>↓</span>
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/flow-club-companion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-nearBlack rounded-xl
                       hover:border-accent/30 hover:bg-surface transition-all duration-200"
          >
            Get for Firefox
            <span>→</span>
          </a>
        </div>
        <p className="text-caption text-stone mt-4">
          Chrome: The extension is temporarily unavailable on the Chrome Web Store while we await review. Download the ZIP, unzip it, then load the folder via <code className="bg-surface px-1.5 py-0.5 rounded text-xs">chrome://extensions</code> → Enable Developer Mode → Load unpacked → select the unzipped folder.
        </p>
      </section>

      {/* First Session */}
      <section id="first-session" className="py-8">
        <h2 className="text-headline text-nearBlack mb-6">Your First Session</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface text-nearBlack text-sm font-medium flex items-center justify-center">
              1
            </div>
            <div>
              <p className="text-body-lg text-nearBlack mb-2 font-medium">Pin the extension</p>
              <p className="text-body text-muted">
                Click the puzzle icon in your browser toolbar → find Flow Club Companion → click the pin so it stays visible. Then click the extension icon anytime to open settings and the Tasks tab.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface text-nearBlack text-sm font-medium flex items-center justify-center">
              2
            </div>
            <div>
              <p className="text-body-lg text-nearBlack mb-2 font-medium">Open a Flow Club session</p>
              <p className="text-body text-muted">
                Go to <a href="https://in.flow.club" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">in.flow.club</a> and join or start a session. Make sure the timer is running.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface text-nearBlack text-sm font-medium flex items-center justify-center">
              3
            </div>
            <div>
              <p className="text-body-lg text-nearBlack mb-2 font-medium">Refresh the page once</p>
              <p className="text-body text-muted mb-3">
                This lets the extension sync with the timer. You should hear a soft tick sound.
              </p>
              <p className="text-caption text-stone italic">
                (Always refresh after changing settings too — browser limitation, not user error)
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface text-nearBlack text-sm font-medium flex items-center justify-center">
              4
            </div>
            <div>
              <p className="text-body-lg text-nearBlack mb-2 font-medium">You're done</p>
              <p className="text-body text-muted">
                Default settings are already on: tick sound (8% volume), voice announcements every 5 minutes. Adjust anytime by clicking the extension icon.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-body text-amber-800">
            <strong>Already had Flow Club open?</strong> Refresh the page so the extension can read the timer.
          </p>
        </div>
      </section>

      <div className="editorial-hr" />

      {/* === REFERENCE SECTION === */}
      <div className="py-4">
        <p className="text-overline uppercase text-accent tracking-widest">
          Reference
        </p>
        <p className="text-caption text-stone mt-1">Read when you need it</p>
      </div>

      {/* Settings Explained */}
      <section id="settings" className="py-8">
        <h2 className="text-headline text-nearBlack mb-4">All Settings Explained</h2>
        <p className="text-body text-muted mb-8">
          Click the extension icon to open settings. Here's what each one does:
        </p>

        <div className="space-y-4">
          <details className="group card">
            <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
              <span className="text-body-lg text-nearBlack font-medium">Audio On</span>
              <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 pb-5 text-body text-muted">
              Master switch for all sounds. If this is off, nothing plays.
            </div>
          </details>

          <details className="group card">
            <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
              <span className="text-body-lg text-nearBlack font-medium">Tick sound</span>
              <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 pb-5 text-body text-muted">
              <p className="mb-2">A soft metronome-style tick every second. Helpful for time blindness and staying grounded.</p>
              <p className="text-caption text-stone italic">Default: ON at 8% volume. Turn off if you find it distracting.</p>
            </div>
          </details>

          <details className="group card">
            <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
              <span className="text-body-lg text-nearBlack font-medium">Voice announcements</span>
              <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 pb-5 text-body text-muted">
              <p className="mb-2">Spoken time updates so you don't have to check the clock. Best for Pomodoros and long deep-focus sessions.</p>
              <p className="text-caption text-stone italic">Default: ON, every 5 minutes. For 25+ min sessions, starts at 24 minutes remaining.</p>
            </div>
          </details>

          <details className="group card">
            <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
              <span className="text-body-lg text-nearBlack font-medium">Mute during breaks</span>
              <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 pb-5 text-body text-muted">
              <p className="mb-2">Automatically silences sounds during breaks.</p>
              <p className="text-caption text-accent font-medium">Highly recommended.</p>
            </div>
          </details>

          <details className="group card">
            <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
              <span className="text-body-lg text-nearBlack font-medium">Seconds countdown</span>
              <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 pb-5 text-body text-muted">
              <p className="mb-2">Announces final seconds (50, 40… 10…). Helpful for transitions.</p>
              <p className="text-caption text-stone italic">Default: OFF. Can feel intense for some — totally optional.</p>
            </div>
          </details>

          <details className="group card">
            <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
              <span className="text-body-lg text-nearBlack font-medium">Volume controls</span>
              <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 pb-5 text-body text-muted">
              <p><strong>Tick volume:</strong> Controls tick loudness only. Starts low.</p>
              <p><strong>Voice volume:</strong> Controls spoken announcements. Separate from system volume.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Tasks Tab */}
      <section id="tasks" className="py-8">
        <h2 className="text-headline text-nearBlack mb-4">Tasks Tab</h2>
        <p className="text-body text-muted mb-6">
          Optional feature for gentle structure. Good for morning routines, reducing decision fatigue, or ritual-based focus.
        </p>

        <div className="card p-6">
          <p className="text-body-lg text-nearBlack mb-4 font-medium">Two-way task syncing</p>
          <p className="text-body text-muted mb-4">
            Copy tasks back and forth between the extension and Flow Club's "My Goals" section. Task text and checkmarks are preserved.
          </p>
          <ul className="space-y-2 text-body text-muted list-disc list-inside">
            <li>Start with goals in Flow Club → refine them in the extension</li>
            <li>Build routines in the extension → send them into a session</li>
          </ul>
        </div>

        <p className="text-caption text-stone italic mt-4">
          Use this only if it helps. It's there to reduce friction — not to add another system.
        </p>
      </section>

      {/* Troubleshooting */}
      <section id="troubleshooting" className="py-8">
        <h2 className="text-headline text-nearBlack mb-6">Troubleshooting</h2>

        <div className="card p-6 mb-6">
          <p className="text-body-lg text-nearBlack mb-4 font-medium">Quick checklist</p>
          <ul className="space-y-2 text-body text-muted">
            <li className="flex items-center gap-2">
              <span className="text-accent">□</span> Click the puzzle icon → pin Flow Club Companion to the toolbar
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">□</span> Flow Club page refreshed after install/settings change
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">□</span> Session timer is running
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">□</span> Audio is on in extension settings
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent">□</span> Browser tab isn't muted
            </li>
          </ul>
        </div>

        <p className="text-body text-muted">
          Most issues are solved by <strong className="text-nearBlack">refreshing once after changing settings</strong>.
        </p>
        <p className="text-body text-muted mt-4">
          Still stuck?{' '}
          <a
            href="https://tally.so/r/Y50Qb5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Reach out here →
          </a>
        </p>
      </section>

      <div className="editorial-hr" />

      {/* Final Note */}
      <section className="py-8">
        <h2 className="text-headline text-nearBlack mb-6">A note on finding your setup</h2>
        <div className="space-y-4 text-body text-muted">
          <p>
            Everyone experiences time blindness differently. Some prefer every-minute announcements, others want just ticking, others want 5-minute verbal check-ins only.
          </p>
          <p>
            <strong className="text-nearBlack">There's no "correct" setup.</strong> If it doesn't click immediately, try adjusting the cue types and volumes before giving up.
          </p>
        </div>
      </section>

      {/* Community Shoutout */}
      <blockquote className="py-8">
        <div className="card p-6">
          <p className="text-caption uppercase tracking-widest text-stone mb-3">Community Shoutout</p>
          <p className="text-body text-muted italic mb-4">
            "…we've loved seeing some of you hack together your own customizations — from <strong className="text-nearBlack">Liddy's extension that adds ticking sounds</strong>, to scripts that categorize tasks…"
          </p>
          <p className="text-caption text-stone">
            — Ricky Yean, co-founder of Flow Club
          </p>
        </div>
      </blockquote>

      <div className="editorial-hr" />

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="text-headline text-nearBlack mb-6">Ready to get started?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/flow-club-chrome_v1.1.5.zip"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl
                       hover:bg-accent-hover transition-colors duration-200"
          >
            Get for Chrome v1.1.5
            <span>↓</span>
          </a>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/flow-club-companion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-nearBlack rounded-xl
                       hover:border-accent/30 hover:bg-surface transition-all duration-200"
          >
            Get for Firefox
            <span>→</span>
          </a>
        </div>
        <p className="text-caption text-stone mt-4">
          Chrome users: Download the ZIP, unzip it, then load the folder via chrome://extensions → Developer Mode → Load unpacked → select the unzipped folder.
        </p>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCtaBand />

      {/* Footer */}
      <footer className="pt-16 md:pt-20 pb-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-body-lg text-nearBlack mb-1 font-medium">
              Lydia Studio
            </p>
            <p className="text-caption text-stone">
              Building calm tools, thoughtfully.
            </p>
          </div>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-caption text-muted hover:text-accent transition-colors duration-200"
            >
              Home
            </Link>
            <a
              href="https://tally.so/r/Y50Qb5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
