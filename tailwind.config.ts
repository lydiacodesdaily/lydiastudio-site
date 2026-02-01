import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New minimal palette using OKLCH-derived hex values
        // (Tailwind doesn't support oklch() in config, so using hex equivalents)
        background: "#fcfcfc",      // oklch(99% 0 0) - near white
        surface: "#f4f4f6",         // oklch(97% 0.005 260) - subtle cool gray
        border: "#e4e4e7",          // oklch(92% 0.01 260) - visible but subtle
        nearBlack: "#1a1a1a",       // oklch(15% 0 0) - primary text
        muted: "#6b6b6b",           // oklch(45% 0 0) - secondary text
        stone: "#8a8a8a",           // oklch(60% 0 0) - tertiary text
        accent: {
          DEFAULT: "#4a6fa5",       // oklch(55% 0.15 250) - blue-slate
          hover: "#3a5a8a",         // oklch(45% 0.18 250) - darker on interaction
          light: "#e8eef5",         // Light accent for backgrounds
          muted: "#7a9ac5",         // Softer accent for secondary elements
        },
        // Keep legacy names for easier migration, map to new values
        matcha: {
          accent: "#4a6fa5",
          tint: "#e8eef5",
        },
        cream: {
          100: "#f4f4f6",
          200: "#e4e4e7",
          300: "#d4d4d8",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subhead': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'editorial': '720px',
        'wide': '1100px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.08), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.03)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
