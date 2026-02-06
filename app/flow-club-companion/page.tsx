'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NewsletterCtaBand from '@/components/NewsletterCtaBand';
import Lightbox from '@/components/Lightbox';

const screenshots = [
  {
    src: '/screenshots/flowclubcompanion/fcc_screenshot_1.jpg',
    alt: 'Flow Club Companion - Gentle audio cues that sync with your session',
  },
  {
    src: '/screenshots/flowclubcompanion/fcc_screenshot_2.jpg',
    alt: 'Flow Club Companion - Keep multiple task lists in one place',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FlowClubCompanion() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 md:pt-44 pb-16 md:pb-20">
          <div className="container-main">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-small text-secondary hover:text-primary transition-colors mb-8"
                >
                  <span>←</span> Back to Lydia Studio
                </Link>
              </motion.div>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-xs font-medium text-tertiary uppercase tracking-wider mb-4"
              >
                Getting Started Guide
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-display font-display text-primary mb-6"
              >
                Flow Club Companion
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-body-lg text-secondary max-w-xl"
              >
                Gentle audio cues and time awareness for Flow Club sessions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Screenshot Showcase */}
        <section className="pb-16">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  onClick={() => setLightboxImage(screenshot)}
                  className="group relative aspect-video rounded-2xl overflow-hidden border border-border cursor-zoom-in transition-all duration-300 hover:border-border-hover hover:shadow-card-hover"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 text-xs text-white bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to enlarge
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="pb-16">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-accent-light border border-border rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs font-medium text-tertiary uppercase tracking-wider mb-4">Quick Start</p>
              <ol className="space-y-4 text-body text-primary">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-small flex items-center justify-center font-medium">1</span>
                  <span>
                    <a href="#install" className="text-secondary hover:text-primary font-medium transition-colors">
                      Install the extension
                    </a>
                    {' '}(Chrome or Firefox)
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-small flex items-center justify-center font-medium">2</span>
                  <span>Open a Flow Club session at <a href="https://in.flow.club" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">in.flow.club</a></span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-white text-small flex items-center justify-center font-medium">3</span>
                  <span><strong>Refresh the page once</strong> — you should hear a tick sound</span>
                </li>
              </ol>
              <p className="text-small text-tertiary mt-6">
                That&apos;s it. Scroll down only if you want to customize or troubleshoot.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="pb-16">
          <div className="container-main">
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-medium text-tertiary uppercase tracking-wider mb-4">Jump to section</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-small text-primary font-medium mb-2">Setup</p>
                  <ul className="space-y-2 text-body">
                    <li>
                      <a href="#install" className="text-secondary hover:text-primary transition-colors">
                        Install the Extension
                      </a>
                    </li>
                    <li>
                      <a href="#first-session" className="text-secondary hover:text-primary transition-colors">
                        Your First Session
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-small text-primary font-medium mb-2">Reference (read later)</p>
                  <ul className="space-y-2 text-body">
                    <li>
                      <a href="#settings" className="text-secondary hover:text-primary transition-colors">
                        All Settings Explained
                      </a>
                    </li>
                    <li>
                      <a href="#tasks" className="text-secondary hover:text-primary transition-colors">
                        Tasks Tab
                      </a>
                    </li>
                    <li>
                      <a href="#troubleshooting" className="text-secondary hover:text-primary transition-colors">
                        Troubleshooting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
          </div>
        </section>

        <div className="container-main">
          <div className="h-px bg-border" />
        </div>

        {/* SETUP SECTION */}
        <section className="py-16">
          <div className="container-main">
            <p className="text-xs font-medium text-tertiary uppercase tracking-wider mb-8">
              Setup
            </p>

            {/* Install Section */}
            <div id="install" className="mb-16 scroll-mt-24">
              <h2 className="text-heading-lg text-primary mb-6">Install the Extension</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chromewebstore.google.com/detail/flow-club-companion/onkipfjaffclamfkknfbippcjpnfbabf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get for Chrome →
                </a>
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/flow-club-companion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get for Firefox →
                </a>
              </div>
            </div>

            {/* First Session */}
            <div id="first-session" className="scroll-mt-24">
              <h2 className="text-heading-lg text-primary mb-8">Your First Session</h2>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-light text-primary text-small font-medium flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <p className="text-body-lg text-primary mb-2 font-medium">Pin the extension</p>
                    <p className="text-body text-secondary mb-4">
                      Click the puzzle icon in your browser toolbar → find Flow Club Companion → click the pin so it stays visible.
                    </p>
                    <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                      <Image
                        src="/screenshots/flowclubcompanion/fcc_extension_pin.png"
                        alt="How to pin Flow Club Companion extension in Chrome"
                        fill
                        className="object-contain bg-accent-light"
                        sizes="(max-width: 768px) 100vw, 384px"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-light text-primary text-small font-medium flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <p className="text-body-lg text-primary mb-2 font-medium">Open a Flow Club session</p>
                    <p className="text-body text-secondary">
                      Go to <a href="https://in.flow.club" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-70 transition-opacity">in.flow.club</a> and join or start a session. Make sure the timer is running.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-light text-primary text-small font-medium flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <p className="text-body-lg text-primary mb-2 font-medium">Refresh the page once</p>
                    <p className="text-body text-secondary mb-2">
                      This lets the extension sync with the timer. You should hear a soft tick sound.
                    </p>
                    <p className="text-small text-tertiary italic">
                      (Always refresh after changing settings too — browser limitation, not user error)
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-light text-primary text-small font-medium flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <p className="text-body-lg text-primary mb-2 font-medium">You&apos;re done</p>
                    <p className="text-body text-secondary">
                      Default settings are already on: tick sound (8% volume), voice announcements every 5 minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
                <p className="text-body text-amber-800">
                  <strong>Already had Flow Club open?</strong> Refresh the page so the extension can read the timer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-main">
          <div className="h-px bg-border" />
        </div>

        {/* REFERENCE SECTION */}
        <section className="py-16">
          <div className="container-main">
            <div className="mb-8">
              <p className="text-xs font-medium text-tertiary uppercase tracking-wider">Reference</p>
              <p className="text-small text-tertiary mt-1">Read when you need it</p>
            </div>

            {/* Settings Explained */}
            <div id="settings" className="mb-16 scroll-mt-24">
              <h2 className="text-heading-lg text-primary mb-4">All Settings Explained</h2>
              <p className="text-body text-secondary mb-8">
                Click the extension icon to open settings. Here&apos;s what each one does:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Audio On', content: 'Master switch for all sounds. If this is off, nothing plays.' },
                  { title: 'Tick sound', content: 'A soft metronome-style tick every second. Helpful for time blindness and staying grounded.', note: 'Default: ON at 8% volume. Turn off if you find it distracting.' },
                  { title: 'Voice announcements', content: 'Spoken time updates so you don\'t have to check the clock. Best for Pomodoros and long deep-focus sessions.', note: 'Default: ON, every 5 minutes. For 25+ min sessions, starts at 24 minutes remaining.' },
                  { title: 'Mute during breaks', content: 'Automatically silences sounds during breaks.', note: 'Currently disabled — this feature depends on Flow Club adding a session phase indicator to their UI.' },
                  { title: 'Seconds countdown', content: 'Announces final seconds (50, 40… 10…). Helpful for transitions.', note: 'Default: OFF. Can feel intense for some — totally optional.' },
                  { title: 'Volume controls', content: 'Tick volume: Controls tick loudness only. Voice volume: Controls spoken announcements.' },
                ].map((item) => (
                  <details key={item.title} className="group card">
                    <summary className="p-5 cursor-pointer list-none flex justify-between items-center">
                      <span className="text-body-lg text-primary font-medium">{item.title}</span>
                      <span className="text-tertiary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-5 pb-5 text-body text-secondary">
                      <p className="mb-2">{item.content}</p>
                      {item.note && <p className="text-small text-tertiary italic">{item.note}</p>}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Tasks Tab */}
            <div id="tasks" className="mb-16 scroll-mt-24">
              <h2 className="text-heading-lg text-primary mb-4">Tasks Tab</h2>
              <p className="text-body text-secondary mb-6">
                Optional feature for gentle structure. Good for morning routines, reducing decision fatigue, or ritual-based focus.
              </p>

              <div className="card p-6">
                <p className="text-body-lg text-primary mb-4 font-medium">Two-way task syncing</p>
                <p className="text-body text-secondary mb-4">
                  Copy tasks back and forth between the extension and Flow Club&apos;s &ldquo;My Goals&rdquo; section. Task text and checkmarks are preserved.
                </p>
                <ul className="space-y-2 text-body text-secondary list-disc list-inside">
                  <li>Start with goals in Flow Club → refine them in the extension</li>
                  <li>Build routines in the extension → send them into a session</li>
                </ul>
              </div>

              <p className="text-small text-tertiary italic mt-4">
                Use this only if it helps. It&apos;s there to reduce friction — not to add another system.
              </p>
            </div>

            {/* Troubleshooting */}
            <div id="troubleshooting" className="scroll-mt-24">
              <h2 className="text-heading-lg text-primary mb-6">Troubleshooting</h2>

              <div className="card p-6 mb-6">
                <p className="text-body-lg text-primary mb-4 font-medium">Quick checklist</p>
                <ul className="space-y-3 text-body text-secondary">
                  {[
                    'Click the puzzle icon → pin Flow Club Companion to the toolbar',
                    'Flow Club page refreshed after install/settings change',
                    'Session timer is running',
                    'Audio is on in extension settings',
                    'Browser tab isn\'t muted',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-body text-secondary">
                Most issues are solved by <strong className="text-primary">refreshing once after changing settings</strong>.
              </p>
              <p className="text-body text-secondary mt-4">
                Still stuck?{' '}
                <a
                  href="https://tally.so/r/Y50Qb5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:opacity-70 transition-opacity"
                >
                  Reach out here →
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="container-main">
          <div className="h-px bg-border" />
        </div>

        {/* Final Note */}
        <section className="py-16">
          <div className="container-main">
            <h2 className="text-heading-lg text-primary mb-6">A note on finding your setup</h2>
            <div className="space-y-4 text-body text-secondary max-w-2xl">
              <p>
                Everyone experiences time blindness differently. Some prefer every-minute announcements, others want just ticking, others want 5-minute verbal check-ins only.
              </p>
              <p className="text-primary font-medium">
                There&apos;s no &ldquo;correct&rdquo; setup. If it doesn&apos;t click immediately, try adjusting the cue types and volumes before giving up.
              </p>
            </div>

            {/* Community Shoutout */}
            <blockquote className="mt-12 max-w-2xl">
              <div className="card p-6">
                <p className="text-xs font-medium text-tertiary uppercase tracking-wider mb-3">Community Shoutout</p>
                <p className="text-body text-secondary italic mb-4">
                  &ldquo;…we&apos;ve loved seeing some of you hack together your own customizations — from <strong className="text-primary">Liddy&apos;s extension that adds ticking sounds</strong>, to scripts that categorize tasks…&rdquo;
                </p>
                <p className="text-small text-tertiary">
                  — Ricky Yean, co-founder of Flow Club
                </p>
              </div>
            </blockquote>
          </div>
        </section>

        <div className="container-main">
          <div className="h-px bg-border" />
        </div>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="container-main">
            <h2 className="text-heading-lg text-primary mb-8">Ready to get started?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://chromewebstore.google.com/detail/flow-club-companion/onkipfjaffclamfkknfbippcjpnfbabf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get for Chrome →
              </a>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/flow-club-companion/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get for Firefox →
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="container-main">
          <NewsletterCtaBand />
        </div>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container-main">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-body font-medium text-primary mb-1">Lydia Studio</p>
                <p className="text-small text-tertiary">Systems that work with you, not against you.</p>
              </div>
              <nav className="flex flex-wrap gap-6">
                <Link href="/" className="text-small text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/privacy" className="text-small text-secondary hover:text-primary transition-colors">
                  Privacy
                </Link>
                <a
                  href="https://tally.so/r/Y50Qb5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-secondary hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </footer>

        {/* Lightbox */}
        {lightboxImage && (
          <Lightbox
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            isOpen={!!lightboxImage}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </main>
    </>
  );
}
