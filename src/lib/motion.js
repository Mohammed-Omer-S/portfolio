// Centralized Framer Motion variants — import these instead of redefining
// per-component so animation timing stays consistent across the site.

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = (delay = 0.08) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

// Pass `reduced` (from usePrefersReducedMotion) to neutralize motion while
// keeping opacity transitions for state changes — never fully removes feedback.
export function withReducedMotion(variants, reduced) {
  if (!reduced) return variants;
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };
}