import { Github, Linkedin, Code2 } from 'lucide-react';
import { profile } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container-grid flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <p className="font-mono text-xs text-ink-300">
          © {year} {profile.name}. All rights reserved.
        </p>

        <nav aria-label="Social links" className="flex gap-5">
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-ink-300 hover:text-accent">
            <Github size={18} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-ink-300 hover:text-accent">
            <Linkedin size={18} />
          </a>
          <a href={profile.social.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode profile" className="text-ink-300 hover:text-accent">
            <Code2 size={18} />
          </a>
        </nav>

        <p className="font-mono text-xs text-ink-500">Built by Mohammed Omer</p>
      </div>
    </footer>
  );
}