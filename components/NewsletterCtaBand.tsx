'use client';

import { useState, FormEvent } from 'react';

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
    <aside className="py-10">
      <div className="p-5 bg-surface rounded-xl border border-border">
        <p className="text-body text-nearBlack mb-3">
          Occasional notes on calm tools. No spam.
        </p>

        {status === 'success' ? (
          <p className="text-body text-accent">
            Check your email to confirm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="cta-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="cta-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              disabled={status === 'loading'}
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg
                         text-body text-nearBlack placeholder:text-stone
                         focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10
                         disabled:opacity-60 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-accent text-white text-body font-medium rounded-lg
                         hover:bg-accent-hover disabled:opacity-60 transition-all duration-200"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-caption text-red-600 mt-2">Something went wrong. Try again?</p>
        )}
      </div>
    </aside>
  );
}
