import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ArrowUpRight } from 'lucide-react';
import { proofLinks } from '../data/content.js';

const iconMap = { GitHub: Github, LinkedIn: Linkedin, LeetCode: Code2 };

export default function ProfessionalProof() {
  return (
    <section id="proof" className="container-grid py-section">
      <p className="section-label">05 · Professional Proof</p>
      <h2 className="mt-3 font-display text-display-lg font-bold">Active Engagement</h2>

      <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
        {proofLinks.map((p, i) => {
          const Icon = iconMap[p.label] ?? Code2;
          return (
            <motion.a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col justify-between bg-ink-950 p-8 transition-colors hover:bg-ink-900"
            >
              <div className="flex items-center justify-between">
                <Icon size={24} aria-hidden="true" />
                <ArrowUpRight
                  size={18}
                  className="text-ink-300 transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-6">
                <p className="font-display text-lg font-semibold">{p.label}</p>
                <p className="mt-1 font-mono text-xs text-accent">{p.stat}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}