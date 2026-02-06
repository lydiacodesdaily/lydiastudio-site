'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-primary font-medium text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          Lydia Studio
        </Link>

        <a
          href="https://tally.so/r/Y50Qb5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-small py-2.5 px-5"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
