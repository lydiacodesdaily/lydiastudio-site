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
      <div className="p-5 bg-cream-50 rounded-lg border border-cream-200">
        <p className="text-body text-nearBlack mb-3">
          Occasional notes on calm tools. No spam.
        </p>

        {status === 'success' ? (
          <p className="text-body text-matcha-700">
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
              className="flex-1 px-3 py-2 bg-white border border-cream-300 rounded-lg
                         text-body text-nearBlack placeholder:text-stone
                         focus:outline-none focus:border-matcha-accent focus:ring-1 focus:ring-matcha-accent/20
                         disabled:opacity-60 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-4 py-2 bg-matcha-accent text-white text-body font-medium rounded-lg
                         hover:bg-matcha-700 disabled:opacity-60 transition-colors"
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
