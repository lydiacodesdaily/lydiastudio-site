'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-matcha-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-matcha-300/15 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Hero Section with Visual Anchor */}
      <section className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Enhanced glassmorphic background */}
        <div className="absolute inset-0 -mx-6 bg-gradient-to-br from-matcha-tint/40 via-matcha-tint/30 to-transparent rounded-3xl blur-2xl -z-10
                        animate-subtle-pulse" />

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-light text-nearBlack mb-4 text-balance
                         bg-gradient-to-br from-nearBlack via-matcha-800 to-matcha-700 bg-clip-text text-transparent
                         leading-tight tracking-tight">
            Lydia Studio
          </h1>
          <p className="text-xl md:text-3xl text-muted mb-3 font-light text-balance leading-relaxed">
            Gentle tools for focus, time awareness, and learning.
          </p>
          <p className="text-base md:text-lg text-muted/80 mb-6 max-w-xl">
            For days when structure helps — but pressure doesn't.
          </p>

          {/* Enhanced avatar with animation */}
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2
                          border border-matcha-accent/20 shadow-sm hover:shadow-md hover:border-matcha-accent/40
                          transition-all duration-300 group cursor-default">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-matcha-400 to-matcha-600
                            flex items-center justify-center overflow-hidden shadow-inner
                            group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-matcha-accent/40 to-matcha-accent/20" />
            </div>
            <p className="text-sm text-nearBlack/80 font-medium">
              Built by Lydia
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-white/40 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-matcha-accent/10 shadow-lg
                          hover:shadow-xl hover:border-matcha-accent/20 transition-all duration-500
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-matcha-50/50 before:to-transparent
                          before:rounded-2xl before:-z-10">
            <p className="text-base md:text-lg text-nearBlack/90 leading-relaxed font-light">
              I build small tools that make time, focus, and structure feel more supportive.
              These tools come from noticing real friction in daily work and learning — moments
              where the shape of a task isn't clear, or where "just five more minutes" compounds
              into hours without awareness. They're designed to be calm and low-pressure, offering
              structure without demanding it.
            </p>
          </div>
        </div>
      </section>

      {/* Why These Tools Exist Section - Distinct Video Container */}
      <section className="relative -mx-6 px-6 py-16 md:py-24 mb-16 md:mb-24">
        {/* Enhanced layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-matcha-tint/30 via-matcha-tint/20 to-matcha-tint/10 border-y border-matcha-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,157,110,0.08),transparent_50%)]" />

        <div className={`relative max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-light text-nearBlack mb-8
                         bg-gradient-to-r from-nearBlack to-matcha-800 bg-clip-text text-transparent">
            Why these tools exist
          </h2>
          <div className="space-y-8">
            <p className="text-base md:text-xl text-nearBlack/80 leading-relaxed font-light max-w-2xl">
              These tools came from lived experience with focus and time feeling invisible —
              not as character flaws, but as real cognitive patterns that need different support.
              When internal clocks don't track reliably, or when task boundaries blur without
              external scaffolding, gentle structure makes a tangible difference.
            </p>

            {/* Enhanced video container with 3D effect */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-matcha-400 to-matcha-600 rounded-2xl blur-lg opacity-25
                              group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-matcha-accent/20 p-6 md:p-8
                              hover:shadow-matcha-accent/10 hover:shadow-3xl transition-all duration-500
                              transform hover:-translate-y-1">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-matcha-500 mt-2 animate-pulse" />
                  <p className="text-sm md:text-base text-nearBlack/70 leading-relaxed">
                    This short video walks through FlowMate and the Flow Club Companion, and why they were built.
                  </p>
                </div>
                <div className="relative w-full rounded-xl overflow-hidden shadow-inner border border-matcha-accent/10"
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
          </div>
        </div>
      </section>

      {/* Projects Section - FlowMate as Hero */}
      <section className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-light text-nearBlack mb-10
                         bg-gradient-to-r from-nearBlack to-matcha-800 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* FlowMate - Flagship Project with enhanced 3D card */}
          <a
            href="https://flowmate.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative mb-8 focus:outline-none"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-matcha-500 via-matcha-400 to-matcha-600 rounded-2xl blur-xl
                            opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-2xl
                            shadow-xl border border-matcha-accent/30 p-8 md:p-12
                            group-hover:shadow-2xl group-hover:border-matcha-accent/50 group-hover:-translate-y-2
                            transition-all duration-500
                            before:absolute before:inset-0 before:bg-gradient-to-br before:from-matcha-50/50 before:to-transparent
                            before:rounded-2xl before:-z-10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-3xl md:text-4xl font-medium text-nearBlack group-hover:text-matcha-700
                               transition-colors duration-300">
                  FlowMate
                </h3>
                <span className="text-xs bg-gradient-to-r from-matcha-500 to-matcha-600 text-white px-4 py-2 rounded-full
                                 font-medium shadow-lg group-hover:scale-110 transition-transform duration-300
                                 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Flagship
                </span>
              </div>

              <p className="text-nearBlack/70 text-lg md:text-xl mb-6 leading-relaxed font-light">
                A gentle focus timer with soft audio cues for time awareness.
              </p>

              <div className="flex items-center gap-2 text-matcha-600 font-medium group-hover:gap-3 transition-all duration-300">
                <span>Open FlowMate</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </a>

          {/* Other Projects - Enhanced Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Flow Club Companion */}
            <a
              href="https://chromewebstore.google.com/detail/flow-club-companion-focus/ncjcggjgiajhmeifohinbeeeegdiaehc"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative focus:outline-none"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-matcha-400 to-matcha-500 rounded-xl blur
                              opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200/60 p-6 md:p-7
                              group-hover:shadow-xl group-hover:border-matcha-accent/40 group-hover:-translate-y-1
                              transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-medium text-nearBlack group-hover:text-matcha-700 transition-colors duration-300">
                    Flow Club Companion
                  </h3>
                  <span className="text-xs bg-matcha-tint/80 text-matcha-accent px-3 py-1.5 rounded-full whitespace-nowrap font-medium
                                   border border-matcha-accent/20">
                    Extension
                  </span>
                </div>
                <p className="text-nearBlack/60 text-sm md:text-base mb-5 leading-relaxed">
                  A lightweight companion tool for Flow Club sessions.
                </p>
                <div className="flex items-center gap-2 text-matcha-600 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>See the extension</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>

            {/* Resources Library */}
            <a
              href="https://resources.lydiastud.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative focus:outline-none"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-matcha-400 to-matcha-500 rounded-xl blur
                              opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200/60 p-6 md:p-7
                              group-hover:shadow-xl group-hover:border-matcha-accent/40 group-hover:-translate-y-1
                              transition-all duration-300">
                <h3 className="text-xl font-medium text-nearBlack mb-3 group-hover:text-matcha-700 transition-colors duration-300">
                  Resources Library
                </h3>
                <p className="text-nearBlack/60 text-sm md:text-base mb-5 leading-relaxed">
                  A curated library of tools, practices, and supports that help when focus is hard.
                </p>
                <div className="flex items-center gap-2 text-matcha-600 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Explore the library</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative max-w-3xl mx-auto px-6 py-12 mt-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-matcha-accent/30 to-transparent" />

        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-2">
            <p className="text-base text-nearBlack font-medium bg-gradient-to-r from-nearBlack to-matcha-800 bg-clip-text text-transparent">
              Lydia Studio
            </p>
            <p className="text-sm text-muted/80">
              Building calm tools, thoughtfully.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:lydia@stud.io"
              className="group text-sm text-muted hover:text-matcha-700 transition-all duration-300 focus:outline-none
                         relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-matcha-500
                         after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
            >
              Email
            </a>
            <a
              href="https://github.com/lydiacodesdaily/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm text-muted hover:text-matcha-700 transition-all duration-300 focus:outline-none
                         relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-matcha-500
                         after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lydiakwag/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-sm text-muted hover:text-matcha-700 transition-all duration-300 focus:outline-none
                         relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-matcha-500
                         after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
