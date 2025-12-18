export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Visual Anchor */}
      <section className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Subtle matcha-tinted panel behind hero */}
        <div className="absolute inset-0 -mx-6 bg-matcha-tint/30 rounded-3xl blur-3xl -z-10" />

        <h1 className="text-4xl md:text-5xl font-light text-nearBlack mb-3 text-balance">
          Lydia Studio
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-2 font-light text-balance">
          Gentle tools for focus, time awareness, and learning.
        </p>
        <p className="text-sm text-muted mb-4">
          For days when structure helps — but pressure doesn't.
        </p>
        <p className="text-xs text-muted">
          Built by Lydia.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <div className="prose prose-neutral max-w-none">
          <p className="text-base md:text-lg text-muted leading-relaxed">
            I build small tools that make time, focus, and structure feel more supportive.
            These tools come from noticing real friction in daily work and learning — moments
            where the shape of a task isn't clear, or where "just five more minutes" compounds
            into hours without awareness. They're designed to be calm and low-pressure, offering
            structure without demanding it.
          </p>
        </div>
      </section>

      {/* Why These Tools Exist Section */}
      <section className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl font-light text-nearBlack mb-6">
          Why these tools exist
        </h2>
        <div className="space-y-6">
          <p className="text-base md:text-lg text-muted leading-relaxed">
            These tools came from lived experience with focus and time feeling invisible —
            not as character flaws, but as real cognitive patterns that need different support.
            When internal clocks don't track reliably, or when task boundaries blur without
            external scaffolding, gentle structure makes a tangible difference.
          </p>
          <div className="bg-white/80 rounded-xl shadow-sm border border-neutral-200/60 p-4 md:p-6">
            <p className="text-sm text-muted mb-4">
              This short video walks through FlowMate and the Flow Club Companion, and why they were built.
            </p>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.kapwing.com/e/6940b8ddb0b8990ffee7a1fe"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="FlowMate and Flow Club Companion walkthrough"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto px-6 pb-16 md:pb-24">
        <h2 className="text-2xl md:text-3xl font-light text-nearBlack mb-8">
          Projects
        </h2>
        <div className="grid gap-6">
          {/* FlowMate */}
          <a
            href="https://flowmate.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/80 rounded-xl shadow-sm border border-neutral-200/60 p-6 md:p-8 hover:shadow-md hover:border-matcha-accent/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-matcha-accent/50 focus:ring-offset-2"
          >
            <h3 className="text-xl font-medium text-nearBlack mb-2 group-hover:text-matcha-accent transition-colors">
              FlowMate
            </h3>
            <p className="text-muted mb-4">
              A gentle focus timer with soft audio cues for time awareness.
            </p>
            <span className="text-sm text-matcha-accent font-medium group-hover:underline">
              Open FlowMate →
            </span>
          </a>

          {/* Flow Club Companion */}
          <a
            href="https://chromewebstore.google.com/detail/flow-club-companion-focus/ncjcggjgiajhmeifohinbeeeegdiaehc"
            className="block bg-white/80 rounded-xl shadow-sm border border-neutral-200/60 p-6 md:p-8 hover:shadow-md hover:border-matcha-accent/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-matcha-accent/50 focus:ring-offset-2"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-medium text-nearBlack group-hover:text-matcha-accent transition-colors">
                Flow Club Companion
              </h3>
              <span className="text-xs bg-matcha-tint text-matcha-accent px-3 py-1 rounded-full">
                Chrome Extension
              </span>
            </div>
            <p className="text-muted mb-4">
              A lightweight companion tool for Flow Club sessions.
            </p>
            <span className="text-sm text-matcha-accent font-medium group-hover:underline">
              See the extension →
            </span>
          </a>

          {/* Resources Library */}
          <a
            href="https://resources.lydiastud.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/80 rounded-xl shadow-sm border border-neutral-200/60 p-6 md:p-8 hover:shadow-md hover:border-matcha-accent/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-matcha-accent/50 focus:ring-offset-2"
          >
            <h3 className="text-xl font-medium text-nearBlack mb-2 group-hover:text-matcha-accent transition-colors">
              Resources Library
            </h3>
            <p className="text-muted mb-4">
              A curated library of tools, practices, and supports that help when focus is hard.
            </p>
            <span className="text-sm text-matcha-accent font-medium group-hover:underline">
              Explore the library →
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-neutral-200/60">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted">
            Built by Lydia
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/lydiacodesdaily/"
              className="text-sm text-muted hover:text-matcha-accent transition-colors focus:outline-none focus:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lydiakwag/"
              className="text-sm text-muted hover:text-matcha-accent transition-colors focus:outline-none focus:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
