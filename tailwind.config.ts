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
          100: "#faf7f3",
          200: "#f5f0e8",
          300: "#ebe3d5",
          400: "#dfd4c2",
          500: "#d1c5b0",
        },
        nearBlack: "#1F1F1F",
        muted: "#5B5B5B",
      },
    },
  },
  plugins: [],
};
export default config;
