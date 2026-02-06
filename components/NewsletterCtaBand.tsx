'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterCtaBand() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('email_address', email);

      const response = await fetch('https://app.kit.com/forms/8982907/subscriptions', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-10"
    >
      <div className="p-6 bg-surface rounded-2xl border border-border">
        <p className="text-body text-primary mb-4">
          Occasional notes on calm tools. No spam.
        </p>

        {status === 'success' ? (
          <p className="text-body text-secondary">
            Check your email to confirm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="cta-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="cta-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-4 py-2.5 bg-background border border-border rounded-full
                         text-body text-primary placeholder:text-tertiary
                         focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10
                         disabled:opacity-60 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary py-2.5"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-small text-red-600 mt-3">Something went wrong. Try again?</p>
        )}
      </div>
    </motion.aside>
  );
}
