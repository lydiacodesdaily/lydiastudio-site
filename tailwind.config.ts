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
        matcha: {
          accent: "#3F6D4E",
          tint: "#E6F0E8",
          50: "#f7f9f5",
          100: "#e8f0e3",
          200: "#d4e3c9",
          300: "#b5d1a3",
          400: "#94bb7a",
          500: "#7ba65e",
          600: "#618549",
          700: "#4d6a3b",
          800: "#3f5632",
          900: "#35472b",
        },
        cream: {
          50: "#fdfcfb",
          100: "#FAF7F1",
          200: "#f5f0e8",
          300: "#ebe3d5",
          400: "#dfd4c2",
          500: "#d1c5b0",
        },
        nearBlack: "#1a1a1a",
        muted: "#6b6b6b",
        stone: "#8a8a8a",
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'subhead': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
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
    },
  },
  plugins: [],
};
export default config;
