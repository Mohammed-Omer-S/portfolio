# Personal Portfolio Website

A fast, accessible personal portfolio built with React (Vite), Tailwind CSS, and Framer Motion — designed to showcase projects, experience, and skills to recruiters with minimal load time and no unnecessary bloat.

**Live site:** [https://portfolio-alpha-weld-gmpv5e6i7a.vercel.app](https://portfolio-alpha-weld-gmpv5e6i7a.vercel.app)

## Features

- ⚡ **Performance-first** — lazy-loaded sections via `React.lazy()` + `Suspense`, keeping the initial bundle under ~5KB gzipped
- ♿ **Accessible** — built to WCAG 2.2 AA guidelines, with full keyboard navigation, visible focus states, and `prefers-reduced-motion` support
- 🎨 **Modern-brutalist design** — monochrome base with a single high-vibrancy accent color
- 📬 **Working contact form** — integrated with Formspree, no backend required
- 📊 **Privacy-first analytics** — Cloudflare Web Analytics, cookie-less and GDPR-compliant
- 📱 **Fully responsive** — mobile-first layout using CSS Grid and Flexbox

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** Formspree
- **Analytics:** Cloudflare Web Analytics

## Sections

- Hero — value proposition + resume download
- Experience & Education — collapsible reverse-chronological timeline
- Technical Matrix — categorized skill grid with proficiency indicators
- Projects — filterable, glassmorphism project gallery
- Professional Proof — GitHub / LinkedIn / LeetCode stats
- Contact — validated form with live email delivery

## Getting Started

```
git clone https://github.com/Mohammed-Omer-S/portfolio.git
cd portfolio
npm install
npm run dev
```

Open `http://localhost:5173` to view it locally.

## Build

```
npm run build      # production build → dist/
npm run preview     # preview the production build
```

## License

This project is licensed under the [MIT License](./LICENSE).