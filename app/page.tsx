'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import NewsletterForm from '@/components/NewsletterForm';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle bg-grid" />

          <div className="container-main relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-display-xl font-display text-primary mb-6"
              >
                Systems that work with you
                {/* <br />
                <span className="text-secondary">with you</span> */}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-body-lg text-secondary max-w-xl mb-10"
              >
                Focus and productivity tools designed for how you actually work.
                Built with care for the easily distracted.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#projects" className="btn-primary">
                  View projects
                </a>
                <a href="#newsletter" className="btn-secondary">
                  Stay updated
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Bento Grid */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-heading-lg text-primary mb-3">Projects</h2>
              <p className="text-body text-secondary">Tools built for focus and flow</p>
            </motion.div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

              {/* FlowMate - Featured (spans 2 cols) */}
              <motion.a
                href="https://flowmate.club/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="card-featured md:col-span-2 p-6 md:p-8 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Mobile Screenshots */}
                  <div className="flex justify-center gap-3 md:gap-4 flex-shrink-0">
                    {[
                      { src: '/screenshots/flowmate/fm_m_1.jpg', alt: 'FlowMate - Focus timer' },
                      { src: '/screenshots/flowmate/fm_m_2.jpg', alt: 'FlowMate - Time awareness' },
                      { src: '/screenshots/flowmate/fm_m_3.jpg', alt: 'FlowMate - Sessions' },
                    ].map((screenshot, index) => (
                      <div
                        key={index}
                        className="relative w-24 md:w-28 aspect-[9/19.5] rounded-xl overflow-hidden border border-border group-hover:border-border-hover transition-all duration-300"
                        style={{ transform: index === 1 ? 'translateY(-8px)' : 'none' }}
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          className="object-cover"
                          sizes="112px"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-medium text-tertiary uppercase tracking-wider mb-2">
                      Featured
                    </span>
                    <h3 className="text-heading-lg text-primary mb-3 group-hover:text-secondary transition-colors">
                      FlowMate
                    </h3>
                    <p className="text-body text-secondary mb-6 max-w-md">
                      Gentle focus timer with audio cues for non-intrusive time awareness.
                      Customizable spoken updates, ambient sounds, and flexible sessions.
                    </p>
                    <span className="link-arrow w-fit">
                      Open FlowMate
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Flow Club Companion */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/flow-club-companion" className="card p-5 h-full flex flex-col group">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-accent-light">
                    <Image
                      src="/screenshots/flowclubcompanion/fcc_screenshot_1.jpg"
                      alt="Flow Club Companion"
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-heading text-primary mb-2 group-hover:text-secondary transition-colors">
                    Flow Club Companion
                  </h3>
                  <p className="text-small text-secondary mb-4 flex-grow">
                    Browser extension enhancing virtual body doubling with time-aware audio cues.
                  </p>
                  <span className="text-xs font-medium text-tertiary">Featured by Flow Club</span>
                </Link>
              </motion.div>

              {/* JustToday */}
              <motion.a
                href="https://www.justtoday.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card p-5 flex flex-col group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-accent-light">
                  <Image
                    src="/screenshots/justtoday.png"
                    alt="JustToday interface"
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-heading text-primary mb-2 group-hover:text-secondary transition-colors">
                  JustToday
                </h3>
                <p className="text-small text-secondary mb-4 flex-grow">
                  Energy-aware planning tool for realistic daily prioritization.
                </p>
                <span className="text-xs font-medium text-tertiary">In development</span>
              </motion.a>

              {/* Resources Library */}
              <motion.a
                href="https://resources.lydiastud.io/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card p-5 flex flex-col group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-accent-light">
                  <Image
                    src="/screenshots/resources.png"
                    alt="Resources Library"
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-heading text-primary mb-2 group-hover:text-secondary transition-colors">
                  Resources Library
                </h3>
                <p className="text-small text-secondary mb-4 flex-grow">
                  Curated collection of evidence-based tools and practices.
                </p>
                <span className="text-xs font-medium text-tertiary">Community-sourced</span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-32 border-t border-border">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-heading-lg text-primary mb-6">Approach</h2>
              <p className="text-body-lg text-secondary mb-6">
                These tools come from years of researching what helps when mainstream
                productivity advice falls short—combining direct user research,
                evidence-based design, and community feedback.
              </p>
              <p className="text-body-lg text-primary font-medium">
                The goal: systems that flex with you, not against you.
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-16 max-w-2xl pl-6 border-l-2 border-primary"
            >
              <p className="text-body-lg text-secondary italic mb-4">
                &ldquo;Thank you so much for developing these tools. They are truly supportive
                and provide a much needed reminder to let up on the gas pedal instead of
                crushing it harder when things don&apos;t seem to be working.&rdquo;
              </p>
              <cite className="text-small text-tertiary not-italic">— Christine</cite>
            </motion.blockquote>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 md:py-32 border-t border-border">
          <div className="container-main">
            <NewsletterForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container-main">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-body font-medium text-primary mb-1">Lydia Studio</p>
                <p className="text-small text-tertiary">
                  Systems that work with you, not against you.
                </p>
              </div>

              <nav className="flex flex-wrap gap-6">
                <Link
                  href="/privacy"
                  className="text-small text-secondary hover:text-primary transition-colors"
                >
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
                <a
                  href="https://github.com/lydiacodesdaily/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-secondary hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lydiakwag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-secondary hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
