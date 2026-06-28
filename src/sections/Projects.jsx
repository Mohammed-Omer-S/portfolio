import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/content.js';

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="card-glass flex flex-col p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{project.category}</span>
      </div>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-300">Problem</dt>
          <dd className="mt-1 text-ink-100">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-300">Solution / Stack</dt>
          <dd className="mt-1 text-ink-100">{project.solution}</dd>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-brutal border border-white/15 px-2 py-0.5 font-mono text-[10px] text-ink-300">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-300">Key Challenge</dt>
          <dd className="mt-1 text-ink-100">{project.challenges}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-300">Impact</dt>
          <dd className="mt-1 font-semibold text-accent">{project.impact}</dd>
        </div>
      </dl>

      <div className="mt-6 flex gap-4 border-t border-white/10 pt-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-300 hover:text-accent"
          >
            <Github size={14} aria-hidden="true" /> Code
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-300 hover:text-accent"
          >
            <ExternalLink size={14} aria-hidden="true" /> Live
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="container-grid py-section">
      <p className="section-label">04 · Selected Work</p>
      <h2 className="mt-3 font-display text-display-lg font-bold">Projects</h2>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-brutal border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              filter === c
                ? 'border-accent bg-accent text-ink-950'
                : 'border-white/15 text-ink-300 hover:border-accent/50 hover:text-accent'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}