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
        // Clean minimal palette
        background: "#FAFAFA",
        surface: "#FFFFFF",
        border: "#E5E5E5",
        "border-hover": "#D4D4D4",

        // Text colors
        primary: "#0A0A0A",
        secondary: "#525252",
        tertiary: "#737373",

        // Accent - sophisticated dark
        accent: {
          DEFAULT: "#171717",
          hover: "#404040",
          light: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Display sizes for hero
        'display-xl': ['clamp(3.5rem, 10vw, 6rem)', {
          lineHeight: '1',
          letterSpacing: '-0.04em',
          fontWeight: '500'
        }],
        'display': ['clamp(2.5rem, 6vw, 4rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
          fontWeight: '500'
        }],
        // Section headings
        'heading-lg': ['clamp(1.75rem, 4vw, 2.5rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '500'
        }],
        'heading': ['clamp(1.25rem, 2.5vw, 1.5rem)', {
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '500'
        }],
        // Body
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
        'xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '680px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'elevated': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
