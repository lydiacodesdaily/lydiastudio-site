'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/90 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image container */}
      <div className="relative w-full max-w-5xl max-h-[85vh] aspect-video rounded-2xl overflow-hidden shadow-elevated animate-fade-up">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain bg-primary"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
      </div>

      {/* Caption */}
      <p className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-small text-white/60 text-center max-w-md px-4">
        {alt}
      </p>
    </div>
  );
}
