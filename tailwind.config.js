/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy palette (keep for dashboard pages)
        palette: {
          gunmetal: '#393d3f',
          white: '#fdfdff',
          silver: '#c6c5b9',
          'pacific-cyan': '#62929e',
          'blue-slate': '#546a7b',
          accent: '#B19777',
        },
        // Design system tokens - Ochre theme (actual values for Tailwind)
        brand: {
          100: '#F3EDE6',
          500: '#B19777',
          600: '#9C8164',
        },
        text: {
          900: '#0B0B0B',
          600: '#5E5E5E',
        },
        surface: {
          0: '#FFFFFF',
          50: '#F6F6F6',
        },
        border: {
          200: '#E6E6E6',
        },
      },
      borderRadius: {
        button: '12px',
        card: '16px',
        input: '12px',
        badge: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      maxWidth: {
        container: '1280px',
      },
      screens: {
        'contact-stack': '560px', // single-col contact section: center content above this, full width below
        'contact-row': '1000px',  // contact section: column below, row (info | form) at or above
      },
      spacing: {
        'ds-1': '0.25rem',
        'ds-2': '0.5rem',
        'ds-3': '0.75rem',
        'ds-4': '1rem',
        'ds-6': '1.5rem',
        'ds-8': '2rem',
        'ds-10': '2.5rem',
        'ds-12': '3rem',
        'ds-16': '4rem',
        'ds-20': '5rem',
      },
      fontSize: {
        'ds-h1': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
        'ds-h2': ['clamp(2rem, 4vw, 2.25rem)', { lineHeight: '1.2' }],
        'ds-h3': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.3' }],
        'ds-body': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
        'ds-small': ['clamp(0.8125rem, 1vw, 0.875rem)', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}
