import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { profile } from '../data/content.js';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';
import { withReducedMotion, fadeUp, staggerContainer } from '../lib/motion.js';

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16">
      {/* Subtle grid background — pure CSS, zero JS cost */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={withReducedMotion(staggerContainer(0.12), reduced)}
        className="container-grid relative"
      >
        <motion.p variants={withReducedMotion(fadeUp, reduced)} className="section-label mb-6">
          Computer Science and Engineering Graduate · Software Engineer · MERN Stack Developer
        </motion.p>

        <motion.h1
          variants={withReducedMotion(fadeUp, reduced)}
          className="font-display text-display-xl font-bold tracking-tight"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={withReducedMotion(fadeUp, reduced)}
          className="mt-6 max-w-xl text-lg text-ink-300 md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={withReducedMotion(fadeUp, reduced)} className="mt-10 flex flex-wrap gap-4">
          <a href={profile.resumeUrl} download className="btn-accent" aria-label="Download resume PDF">
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
          <a href="#contact" className="btn-brutal">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        aria-label="Scroll to experience section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-300 transition-colors hover:text-accent"
      >
        <ArrowDown className={reduced ? '' : 'animate-bounce'} size={22} />
      </motion.a>
    </section>
  );
}