import { motion } from 'framer-motion';
import { skillCategories } from '../data/content.js';

function ProficiencyDots({ level, max = 5 }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Proficiency ${level} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${i < level ? 'bg-accent' : 'bg-white/10'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TechMatrix() {
  return (
    <section id="stack" className="container-grid py-section">
      <p className="section-label">03 · Technical Matrix</p>
      <h2 className="mt-3 font-display text-display-lg font-bold">Stack &amp; Proficiency</h2>

      <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: ci * 0.05 }}
            className="bg-ink-950 p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{cat.label}</h3>
            <ul className="mt-5 space-y-4">
              {cat.skills.map((s) => (
                <li key={s.name}>
                  <p className="text-sm text-ink-100">{s.name}</p>
                  <div className="mt-1.5">
                    <ProficiencyDots level={s.level} />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}