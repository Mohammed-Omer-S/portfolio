/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Monochrome base
        ink: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1c1c1c',
          700: '#2a2a2a',
          500: '#6b6b6b',
          300: '#a3a3a3',
          100: '#e8e8e8',
          0: '#fafafa',
        },
        // Single high-vibrancy accent — electric lime.
        // Swap this one value to re-theme the entire site.
        accent: {
          DEFAULT: '#D7FF3D',
          dim: '#a8cc1f',
          glow: 'rgba(215,255,61,0.25)',
        },
      },
      fontFamily: {
        display: ['"Neue Montreal"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem,9vw,8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem,6vw,5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: 'clamp(5rem,10vw,9rem)',
      },
      borderRadius: {
        none: '0px',
        brutal: '2px',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};