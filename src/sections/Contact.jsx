import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/content.js';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  function validate(form) {
    const next = {};
    if (!form.get('name')?.trim()) next.name = 'Name is required.';
    const email = form.get('email')?.trim() ?? '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email.';
    if (!form.get('message')?.trim()) next.message = 'Message cannot be empty.';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    setStatus('submitting');
    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form,
      });

      if (!response.ok) throw new Error('Formspree request failed');

      setStatus('success');
      formEl.reset();
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="container-grid py-section">
      <p className="section-label">06 · Contact</p>
      <h2 className="mt-3 font-display text-display-lg font-bold">Let&apos;s build something.</h2>
      <p className="mt-4 max-w-md text-ink-300">
        Open to internships, full-time roles, and collaborative open-source work.
      </p>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="mt-10 flex items-center gap-3 rounded-brutal border border-accent/40 bg-accent/10 p-6"
        >
          <CheckCircle2 className="text-accent" aria-hidden="true" />
          <p>Thanks — your message has been sent. I&apos;ll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 max-w-lg space-y-5" noValidate>
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" />

          <div>
            <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-ink-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus-visible:border-accent"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-ink-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus-visible:border-accent"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-ink-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 outline-none focus-visible:border-accent"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button type="submit" disabled={status === 'submitting'} className="btn-accent disabled:opacity-60">
            <Send size={16} aria-hidden="true" />
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p role="alert" className="text-sm text-red-400">
              Something went wrong. Please try again or email me directly at {profile.email}.
            </p>
          )}
        </form>
      )}
    </section>
  );
}