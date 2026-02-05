'use client';

import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="editorial-grid pt-24 md:pt-32 pb-20">
      {/* Hero */}
      <section className="animate-fade-in">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <h1 className="text-headline text-nearBlack mb-4">Support</h1>
        <p className="text-body-lg text-muted max-w-[52ch]">
          Have a question, found a bug, or need help with one of our apps?
          We&apos;re here to help.
        </p>
      </section>

      {/* Quick Help Cards */}
      <section className="mt-16 animate-fade-in animate-delay-100">
        <h2 className="text-overline text-stone uppercase tracking-wider mb-6">
          Quick Help
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/flow-club-companion"
            className="card p-6 group hover:border-accent/30 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-subhead text-nearBlack group-hover:text-accent transition-colors">
                  Flow Club Companion
                </h3>
                <p className="text-body text-muted mt-1">
                  Setup guide, troubleshooting, and FAQ
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-stone group-hover:text-accent transition-colors shrink-0 mt-1"
              >
                <path
                  d="M6 14L14 6M14 6H6M14 6V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          <a
            href="https://github.com/lydiastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 group hover:border-accent/30 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-subhead text-nearBlack group-hover:text-accent transition-colors">
                  GitHub
                </h3>
                <p className="text-body text-muted mt-1">
                  Report issues or contribute to open source projects
                </p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-stone group-hover:text-accent transition-colors shrink-0 mt-1"
              >
                <path
                  d="M6 14L14 6M14 6H6M14 6V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Apps Section */}
      <section className="mt-16 animate-fade-in animate-delay-200">
        <h2 className="text-overline text-stone uppercase tracking-wider mb-6">
          Our Apps
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border">
            <div>
              <h3 className="text-body font-medium text-nearBlack">FlowMate</h3>
              <p className="text-caption text-muted">Pomodoro timer for macOS</p>
            </div>
            <span className="text-caption px-2 py-1 bg-accent-light text-accent rounded-md">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border">
            <div>
              <h3 className="text-body font-medium text-nearBlack">Flow Club Companion</h3>
              <p className="text-caption text-muted">Browser extension for Flow Club</p>
            </div>
            <span className="text-caption px-2 py-1 bg-accent-light text-accent rounded-md">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border">
            <div>
              <h3 className="text-body font-medium text-nearBlack">JustToday</h3>
              <p className="text-caption text-muted">Daily task planner</p>
            </div>
            <span className="text-caption px-2 py-1 bg-surface text-stone rounded-md border border-border">
              In Development
            </span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-16 animate-fade-in animate-delay-300">
        <h2 className="text-overline text-stone uppercase tracking-wider mb-6">
          Get in Touch
        </h2>

        <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-subhead text-nearBlack mb-2">Send us a message</h3>
            <p className="text-body text-muted">
              Whether it&apos;s a bug report, feature request, or just a question —
              we&apos;d love to hear from you.
            </p>
          </div>

          {/* Tally Form Embed */}
          <iframe
            data-tally-src="https://tally.so/embed/Y50Qb5?alignLeft=1&hideTitle=1&transparentBackground=1"
            loading="lazy"
            width="100%"
            height="400"
            title="Support Form"
            className="rounded-xl border-0"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}
              `,
            }}
          />
        </div>
      </section>

      {/* Email Alternative */}
      <section className="mt-12 animate-fade-in animate-delay-400">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-accent-light/50 rounded-2xl border border-accent/10">
          <div>
            <h3 className="text-body font-medium text-nearBlack">Prefer email?</h3>
            <p className="text-body text-muted">
              You can also reach us directly at{' '}
              <a
                href="mailto:hello@lydiastud.io"
                className="text-accent hover:text-accent-hover transition-colors link-underline"
              >
                hello@lydiastud.io
              </a>
            </p>
          </div>
          <a
            href="mailto:hello@lydiastud.io"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors text-body font-medium shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5.25L9 9.75L15 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2.25"
                y="3.75"
                width="13.5"
                height="10.5"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Send Email
          </a>
        </div>
      </section>

      {/* Response Time Note */}
      <section className="mt-8 text-center">
        <p className="text-caption text-stone">
          We typically respond within 1–2 business days.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-caption text-stone">
          <p>&copy; {new Date().getFullYear()} Lydia Studio</p>
          <nav className="flex flex-wrap gap-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <a
              href="https://github.com/lydiastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lydiayc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
