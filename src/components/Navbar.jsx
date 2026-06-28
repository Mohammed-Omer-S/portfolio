import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#proof', label: 'Proof' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <nav className="container-grid flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#main" className="font-mono text-sm font-semibold tracking-wider">
          MO<span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-ink-300 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink-950 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-white/5">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-sm uppercase tracking-widest"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}