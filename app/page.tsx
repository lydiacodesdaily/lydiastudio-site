'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="editorial-grid min-h-screen pb-20">
      {/* Hero Section */}
      <header className={`pt-20 md:pt-32 pb-16 md:pb-24 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
        <p className="text-overline uppercase text-matcha-accent font-medium tracking-widest mb-6">
          Lydia Studio
        </p>
        <h1 className="text-display font-serif text-nearBlack mb-6 max-w-[14ch]">
          Gentle tools for focus & time awareness
        </h1>
        <p className="text-subhead text-muted font-light max-w-[32ch]">
          For days when structure helps, but pressure doesn't.
        </p>
      </header>

      {/* Divider */}
      <div className={`editorial-hr opacity-0 ${isVisible ? 'animate-fade-up animate-delay-100' : ''}`} />

      {/* Philosophy Section */}
      <section className={`py-8 opacity-0 ${isVisible ? 'animate-fade-up animate-delay-200' : ''}`}>
        <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-start">
          <div>
            <p className="text-caption uppercase tracking-widest text-stone mb-2">Philosophy</p>
            <p className="text-body-lg font-serif text-nearBlack leading-relaxed">
              Built from lived experience
            </p>
          </div>
          <div className="space-y-5 text-body text-muted">
            <p>
              I build small, human-centered tools that make time, focus, and structure feel more supportive.
            </p>
            <p>
              These tools come from noticing real friction in daily work and learning: moments where task boundaries blur, time quietly slips, or constant self-monitoring becomes exhausting.
            </p>
            <p>
              Rather than pushing productivity harder, they offer calm structure that users can lean on when it helps and ignore when it doesn't.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <blockquote className={`py-12 md:py-20 opacity-0 ${isVisible ? 'animate-fade-up animate-delay-300' : ''}`}>
        <p className="text-headline font-serif text-nearBlack leading-snug max-w-[24ch]">
          "Soft cues, limited scope, energy-aware planning, and intentional pauses."
        </p>
        <footer className="mt-6">
          <div className="editorial-hr mt-0 mb-4" />
          <p className="text-caption text-stone">
            Reducing reliance on motivation or constant vigilance
          </p>
        </footer>
      </blockquote>

      {/* Video Section */}
      <section className="breakout py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 md:gap-16 items-center">
          <div className={`opacity-0 ${isVisible ? 'animate-fade-up animate-delay-300' : ''}`}>
            <p className="text-overline uppercase text-matcha-accent font-medium tracking-widest mb-4">
              How it works
            </p>
            <h2 className="text-headline font-serif text-nearBlack mb-4">
              Design decisions in practice
            </h2>
            <p className="text-body text-muted mb-4">
              This short video walks through FlowMate and Flow Club Companion, showing how they support time awareness during real work sessions.
            </p>
          </div>
          <div className={`opacity-0 ${isVisible ? 'animate-fade-up animate-delay-400' : ''}`}>
            <div className="relative w-full bg-cream-100 rounded-lg overflow-hidden border border-cream-300"
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

      {/* Projects Header */}
      <div className="pt-16 md:pt-24 pb-8">
        <p className="text-overline uppercase text-matcha-accent font-medium tracking-widest mb-4">
          Projects
        </p>
        <h2 className="text-headline font-serif text-nearBlack">
          Tools I've built
        </h2>
      </div>

      {/* Project 1: JustToday - Featured */}
      <a
        href="https://www.justtoday.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="breakout group block py-8 md:py-12"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[4/3] bg-cream-100 rounded-lg overflow-hidden border border-cream-300
                          group-hover:border-matcha-accent/30 transition-colors duration-300">
            <Image
              src="/screenshots/justtoday.png"
              alt="JustToday interface showing energy-aware daily planning"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-caption text-matcha-accent mb-2 group-hover:text-matcha-700 transition-colors">
              Featured Project
            </p>
            <h3 className="text-headline font-serif text-nearBlack mb-4 group-hover:text-matcha-800 transition-colors">
              JustToday
            </h3>
            <p className="text-body-lg text-muted mb-3">
              An energy-aware daily planning system built around a "release then check once" workflow that reduces task fixation and guilt.
            </p>
            <p className="text-body text-stone mb-6">
              Adapt your day based on Low / Steady / Flow energy, encouraging progress without streaks, rigid schedules, or constant self-monitoring.
            </p>
            <span className="inline-flex items-center gap-2 text-body text-matcha-accent font-medium
                           group-hover:gap-3 transition-all duration-300">
              Open JustToday
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </a>

      {/* Divider */}
      <div className="editorial-hr" />

      {/* Projects Grid - Secondary */}
      <div className="breakout grid md:grid-cols-3 gap-6 md:gap-8 py-8">
        {/* FlowMate */}
        <a
          href="https://flowmate.club/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white/60 rounded-lg border border-cream-300
                     hover:border-matcha-accent/30 hover:bg-white transition-all duration-300"
        >
          <div className="relative aspect-[4/3] bg-cream-100 rounded overflow-hidden mb-5 border border-cream-200">
            <Image
              src="/screenshots/flowmate.png"
              alt="FlowMate focus timer interface"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-body-lg font-serif text-nearBlack mb-2 group-hover:text-matcha-800 transition-colors">
            FlowMate
          </h3>
          <p className="text-caption text-muted mb-3 line-clamp-3">
            A gentle focus timer using soft audio cues and configurable verbal time announcements to support time awareness.
          </p>
          <p className="text-caption text-stone italic mb-4">
            1,000+ organic visitors
          </p>
          <span className="inline-flex items-center gap-1.5 text-caption text-matcha-accent font-medium
                         group-hover:gap-2 transition-all duration-300">
            Visit site <span>→</span>
          </span>
        </a>

        {/* Flow Club Companion */}
        <a
          href="https://chromewebstore.google.com/detail/flow-club-companion-focus/ncjcggjgiajhmeifohinbeeeegdiaehc"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white/60 rounded-lg border border-cream-300
                     hover:border-matcha-accent/30 hover:bg-white transition-all duration-300"
        >
          <div className="relative aspect-[4/3] bg-cream-100 rounded overflow-hidden mb-5 border border-cream-200">
            <Image
              src="/screenshots/flowclub-companion.png"
              alt="Flow Club Companion Chrome extension interface"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-body-lg font-serif text-nearBlack mb-2 group-hover:text-matcha-800 transition-colors">
            Flow Club Companion
          </h3>
          <p className="text-caption text-muted mb-3 line-clamp-3">
            Chrome extension embedding time-aware audio cues and reusable task lists into live Flow Club sessions.
          </p>
          <p className="text-caption text-stone italic mb-4">
            60+ active users, featured by Flow Club
          </p>
          <span className="inline-flex items-center gap-1.5 text-caption text-matcha-accent font-medium
                         group-hover:gap-2 transition-all duration-300">
            {/* Get extension <span>→</span> */}
          </span>
        </a>

        {/* Resources Library */}
        <a
          href="https://resources.lydiastud.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-white/60 rounded-lg border border-cream-300
                     hover:border-matcha-accent/30 hover:bg-white transition-all duration-300"
        >
          <div className="relative aspect-[4/3] bg-cream-100 rounded overflow-hidden mb-5 border border-cream-200">
            <Image
              src="/screenshots/resources.png"
              alt="Resources Library interface"
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h3 className="text-body-lg font-serif text-nearBlack mb-2 group-hover:text-matcha-800 transition-colors">
            Resources Library
          </h3>
          <p className="text-caption text-muted mb-3 line-clamp-3">
            A curated library of tools, practices, and external supports that help when focus is hard.
          </p>
          <p className="text-caption text-stone italic mb-4">
            Community-sourced recommendations
          </p>
          <span className="inline-flex items-center gap-1.5 text-caption text-matcha-accent font-medium
                         group-hover:gap-2 transition-all duration-300">
            Explore library <span>→</span>
          </span>
        </a>
      </div>

      {/* Newsletter */}
      <div className={`opacity-0 ${isVisible ? 'animate-fade-up animate-delay-400' : ''}`}>
        <NewsletterForm />
      </div>

      {/* Footer */}
      <footer className="pt-12 md:pt-16 pb-8 border-t border-cream-300">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-body-lg font-serif text-nearBlack mb-1">
              Lydia Studio
            </p>
            <p className="text-caption text-stone">
              Building calm tools, thoughtfully.
            </p>
          </div>
          <nav className="flex gap-6">
            <a
              href="https://tally.so/r/Y50Qb5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-matcha-accent transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="https://github.com/lydiacodesdaily/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-matcha-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lydiakwag/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-muted hover:text-matcha-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
