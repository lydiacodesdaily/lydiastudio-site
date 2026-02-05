'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="editorial-grid min-h-screen pb-20">
      {/* Hero Section */}
      <header className={`relative pt-24 md:pt-40 pb-20 md:pb-28 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
        <p className="text-overline uppercase text-accent tracking-widest mb-6">
          Lydia Studio
        </p>
        <h1 className="text-display text-nearBlack mb-6 max-w-[16ch] text-balance">
          Systems that work with you
        </h1>
        <p className="text-subhead text-muted max-w-[48ch]">
          Tools and research for people navigating focus, time, and energy in ways that actually fit how they work.
        </p>
      </header>

      {/* Divider */}
      <div className={`editorial-hr opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`} />

      {/* Philosophy Section */}
      <section className={`py-16 md:py-20 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-overline uppercase tracking-widest text-accent mb-3">Philosophy</p>
            <p className="text-body-lg text-nearBlack leading-relaxed font-medium">
              Building from direct experience with what makes systems work—or fail
            </p>
          </div>
          <div className="space-y-5 text-body text-muted">
            <p>
              When conventional productivity tools consistently create friction—rigid structures that don't flex, alarms that jar instead of support, planning that ignores real energy patterns—the solution isn't to push harder. It's to redesign the system.
            </p>
            <p>
              My approach: notice friction, research evidence-based solutions, prototype minimal systems, and share what works.
            </p>
            <p>
              This isn't about willpower. It's about better design. Good tools account for natural variation in human attention and energy. They offer structure when it helps and flex when it doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <blockquote className="reveal-on-scroll py-10 md:py-14">
        <div className="accent-line mb-6" />
        <p className="text-headline text-nearBlack leading-snug max-w-[28ch]">
          "Soft cues, limited scope, energy-aware planning, and intentional pauses."
        </p>
        <p className="mt-6 text-caption text-stone">
          Reducing reliance on motivation or constant vigilance
        </p>
      </blockquote>

      {/* Testimonial */}
      <blockquote className="reveal-on-scroll py-10 md:py-14 card p-6 md:p-8">
        <p className="text-body-lg text-nearBlack leading-relaxed mb-4">
          "Thank you so much for developing these tools. They are truly supportive and provide a much needed reminder to let up on the gas pedal instead of crushing it harder when things don't seem to be working."
        </p>
        <footer className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <cite className="text-caption text-stone not-italic font-medium">
            — Christine
          </cite>
        </footer>
      </blockquote>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* Why This Matters Section */}
      <section className="reveal-on-scroll py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-overline uppercase tracking-widest text-accent mb-3">Why This Matters</p>
            <p className="text-body-lg text-nearBlack leading-relaxed font-medium">
              Better user understanding leads to better products
            </p>
          </div>
          <div className="space-y-5 text-body text-muted">
            <p>
              Building from lived experience isn't just personal—it's a research methodology that reveals friction points others miss.
            </p>
            <p className="font-medium text-nearBlack">What this work has taught me:</p>
            <ul className="space-y-2.5">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">—</span>
                <span>How to identify usability gaps through direct observation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">—</span>
                <span>Rapid prototyping and iteration based on real user feedback</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">—</span>
                <span>Designing for cognitive accessibility—which benefits all users</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">—</span>
                <span>Creating flexible systems that accommodate different working styles</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">—</span>
                <span>Building tools that reduce cognitive load rather than adding to it</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <blockquote className="reveal-on-scroll py-10 md:py-14 border-l-2 border-accent pl-6 md:pl-8">
        <p className="text-body-lg text-nearBlack leading-relaxed mb-2">
          <span className="font-medium">The insight:</span> When you design for people whose needs aren't met by mainstream tools, you often create something that works better for everyone.
        </p>
        <p className="text-body text-muted">
          Accessibility isn't an edge case—it's a design principle that improves products broadly.
        </p>
      </blockquote>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* Video Section */}
      <section className="breakout py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 md:gap-16 items-center">
          <div className="reveal-on-scroll">
            <p className="text-overline uppercase text-accent tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-headline text-nearBlack mb-4">
              Design decisions in practice
            </h2>
            <p className="text-body text-muted">
              This video walks through FlowMate and Flow Club Companion, showing how these principles translate into real tools during actual work sessions.
            </p>
          </div>
          <div className="reveal-on-scroll">
            <div className="relative w-full bg-surface rounded-xl overflow-hidden border border-border"
                 style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.kapwing.com/e/6940b8ddb0b8990ffee7a1fe"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="FlowMate and Flow Club Companion walkthrough"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* Design Principles Section */}
      <section className="reveal-on-scroll py-16 md:py-20">
        <p className="text-overline uppercase text-accent tracking-widest mb-4">
          Research & Approach
        </p>
        <h2 className="text-headline text-nearBlack mb-10">
          Design principles I follow
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-2">
            <h3 className="text-body-lg text-nearBlack font-medium">Reduce cognitive overhead</h3>
            <p className="text-body text-muted">
              Good tools should feel effortless. If a productivity system requires constant willpower or monitoring, it's adding to the problem it claims to solve.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-body-lg text-nearBlack font-medium">Design for variability</h3>
            <p className="text-body text-muted">
              Attention, energy, and capacity naturally fluctuate. Effective tools accommodate this rather than fighting it.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-body-lg text-nearBlack font-medium">Make structure supportive, not rigid</h3>
            <p className="text-body text-muted">
              Structure helps—but only when users can adapt it to their current context without the system breaking.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-body-lg text-nearBlack font-medium">Prioritize user agency</h3>
            <p className="text-body text-muted">
              The user knows their needs better than any system. Tools should offer options, not mandates.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* Projects Header */}
      <div className="pt-20 md:pt-28 pb-10">
        <p className="text-overline uppercase text-accent tracking-widest mb-4">
          Projects
        </p>
        <h2 className="text-headline text-nearBlack">
          Tools I've built
        </h2>
      </div>

      {/* Project 1: FlowMate - Featured */}
      <a
        href="https://flowmate.club/"
        target="_blank"
        rel="noopener noreferrer"
        className="breakout group block py-10 md:py-14"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[4/3] bg-surface rounded-xl overflow-hidden border border-border
                          group-hover:border-accent/30 transition-all duration-300 ease-out-expo group-hover:shadow-card-hover">
            <Image
              src="/screenshots/flowmate.png"
              alt="FlowMate focus timer interface"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-caption text-accent mb-2 group-hover:text-accent-hover transition-colors">
              Featured Project
            </p>
            <h3 className="text-headline text-nearBlack mb-4 group-hover:text-accent transition-colors">
              FlowMate
            </h3>
            <p className="text-body-lg text-muted mb-3">
              Gentle focus timer with audio cues for non-intrusive time awareness.
            </p>
            <p className="text-body text-stone mb-6">
              Customizable spoken time updates, ambient sounds, and flexible session lengths create supportive structure for focused work. Built on research showing soft audio cues support time awareness without the stress response triggered by sudden alarms.
            </p>
            <ul className="text-caption text-muted space-y-1.5 mb-8">
              <li className="flex gap-2"><span className="text-accent">•</span> Configurable verbal time announcements</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Ambient background sounds</li>
              <li className="flex gap-2"><span className="text-accent">•</span> Flexible session lengths</li>
              <li className="flex gap-2"><span className="text-accent">•</span> No harsh interruptions</li>
            </ul>
            <span className="inline-flex items-center gap-2 text-body text-accent font-medium
                           group-hover:gap-3 transition-all duration-300">
              Open FlowMate
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </a>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* Projects Grid - Bento Layout */}
      <div className="breakout grid md:grid-cols-3 gap-6 md:gap-6 py-10">
        {/* JustToday */}
        <a
          href="https://www.justtoday.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group card block p-5"
        >
          <div className="relative aspect-[4/3] bg-background rounded-lg overflow-hidden mb-5 border border-border">
            <Image
              src="/screenshots/justtoday.png"
              alt="JustToday interface showing energy-aware daily planning"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-body-lg text-nearBlack mb-2 font-medium group-hover:text-accent transition-colors">
            JustToday
          </h3>
          <p className="text-caption text-muted mb-3 line-clamp-3">
            Energy-aware planning tool for realistic daily prioritization. Helps identify what matters today and consciously defer the rest.
          </p>
          <p className="text-caption text-stone italic mb-4">
            In development — feedback welcome
          </p>
          <span className="inline-flex items-center gap-1.5 text-caption text-accent font-medium
                         group-hover:gap-2.5 transition-all duration-300">
            Try it out <span>→</span>
          </span>
        </a>

        {/* Flow Club Companion */}
        <a
          href="/flow-club-companion"
          className="group card block p-5"
        >
          <div className="relative aspect-[4/3] bg-background rounded-lg overflow-hidden mb-5 border border-border">
            <Image
              src="/screenshots/flowclub-companion.png"
              alt="Flow Club Companion browser extension interface"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-body-lg text-nearBlack mb-2 font-medium group-hover:text-accent transition-colors">
            Flow Club Companion
          </h3>
          <p className="text-caption text-muted mb-3 line-clamp-3">
            Browser extension enhancing virtual body doubling sessions with time-aware audio cues and reusable task lists.
          </p>
          <p className="text-caption text-stone italic mb-4">
            Featured by Flow Club
          </p>
          <span className="inline-flex items-center gap-1.5 text-caption text-accent font-medium
                         group-hover:gap-2.5 transition-all duration-300">
            Getting started <span>→</span>
          </span>
        </a>

        {/* Resources Library */}
        <a
          href="https://resources.lydiastud.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="group card block p-5"
        >
          <div className="relative aspect-[4/3] bg-background rounded-lg overflow-hidden mb-5 border border-border">
            <Image
              src="/screenshots/resources.png"
              alt="Resources Library interface"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-body-lg text-nearBlack mb-2 font-medium group-hover:text-accent transition-colors">
            Resources Library
          </h3>
          <p className="text-caption text-muted mb-3 line-clamp-3">
            Curated collection of evidence-based tools and practices organized by need: focus support, energy management, task initiation.
          </p>
          <p className="text-caption text-stone italic mb-4">
            Community-sourced recommendations
          </p>
          <span className="inline-flex items-center gap-1.5 text-caption text-accent font-medium
                         group-hover:gap-2.5 transition-all duration-300">
            Explore library <span>→</span>
          </span>
        </a>
      </div>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* About Section */}
      <section className="reveal-on-scroll py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16 items-start">
          <div>
            <p className="text-overline uppercase tracking-widest text-accent mb-3">About</p>
            <p className="text-body-lg text-nearBlack leading-relaxed font-medium">
              Building better systems
            </p>
          </div>
          <div className="space-y-5 text-body text-muted">
            <p>
              These tools emerge from years of researching what actually helps when mainstream productivity advice falls short. The work combines direct user research, evidence-based design drawing from cognitive psychology and accessibility principles, rapid iteration, and community feedback.
            </p>
            <p>
              If you've experienced the gap between how productivity tools expect you to work and how you actually function best, you understand the problem this work addresses.
            </p>
            <p className="text-nearBlack font-medium">
              The solution isn't changing yourself to fit rigid systems. It's building better systems.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="reveal-on-scroll">
        <NewsletterForm />
      </div>

      {/* Footer */}
      <footer className="pt-16 md:pt-20 pb-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-body-lg text-nearBlack mb-1 font-medium">
              Lydia Studio
            </p>
            <p className="text-caption text-stone">
              Systems that work with you, not against you.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="text-caption text-muted hover:text-accent transition-colors duration-200"
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
