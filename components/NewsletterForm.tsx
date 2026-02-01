'use client';

import { useState, FormEvent } from 'react';

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
    <section id="newsletter" className="py-16 md:py-20 scroll-mt-8">
      <div className="max-w-md">
        <p className="text-overline uppercase text-accent tracking-widest mb-4">
          Newsletter
        </p>
        <h2 className="text-headline text-nearBlack mb-3">
          Get occasional notes
        </h2>
        <p className="text-body text-muted mb-8">
          Calm productivity tools and energy-aware design. No spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-accent-light rounded-xl border border-accent/20">
            <p className="text-body text-accent-hover">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email_address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl
                           text-body text-nearBlack placeholder:text-stone
                           focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10
                           disabled:opacity-60 disabled:cursor-not-allowed
                           transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-medium rounded-xl
                         hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-all duration-200"
            >
              {status === 'loading' ? 'Subscribing...' : 'Get updates'}
            </button>
            {status === 'error' && (
              <p className="text-caption text-red-600">{message}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
