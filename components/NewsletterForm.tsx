'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
        setMessage('Check your email to confirm your subscription.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-lg"
    >
      <h2 className="text-heading-lg text-primary mb-3">Stay updated</h2>
      <p className="text-body text-secondary mb-8">
        Occasional notes on calm productivity tools and energy-aware design.
        No spam, unsubscribe anytime.
      </p>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-5 bg-accent-light rounded-2xl border border-border"
        >
          <p className="text-body text-primary">{message}</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email_address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-5 py-3.5 bg-surface border border-border rounded-full
                       text-body text-primary placeholder:text-tertiary
                       focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10
                       disabled:opacity-60 disabled:cursor-not-allowed
                       transition-all duration-200"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-small text-red-600"
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
}
