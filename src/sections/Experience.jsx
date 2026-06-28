import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap, GitBranch, Code2 } from 'lucide-react';
import { timeline } from '../data/content.js';

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  opensource: GitBranch,
  project: Code2,
};

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = iconMap[item.type] ?? Code2;
  const panelId = `timeline-panel-${item.id}`;

  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="relative border-l border-white/10 pl-8"
    >
      <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-ink-950 ring-2 ring-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <Icon size={14} aria-hidden="true" /> {item.period}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold md:text-2xl">{item.title}</h3>
          <p className="text-sm text-ink-300">{item.org}</p>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <p className="mt-3 text-ink-300">{item.summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-3 space-y-2 overflow-hidden border-t border-white/5 pt-3"
          >
            {item.details.map((d, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-100">
                <span className="text-accent" aria-hidden="true">→</span> {d}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="container-grid py-section">
      <p className="section-label">02 · Background</p>
      <h2 className="mt-3 font-display text-display-lg font-bold">Experience &amp; Education</h2>

      <ol className="mt-14 space-y-12">
        {timeline.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </ol>
    </section>
  );
}