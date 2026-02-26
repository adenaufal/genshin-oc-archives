import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        "canvas-secondary": "var(--color-canvas-secondary)",
        ink: "var(--color-ink)",
        "ink-secondary": "var(--color-ink-secondary)",
        graphite: "var(--color-graphite)",
        "graphite-secondary": "var(--color-graphite-secondary)",
        vapor: "var(--color-vapor)",
        crimson: "var(--color-crimson)",
        jade: "var(--color-jade)",
        gold: "var(--color-gold)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cactus)", "var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "500" }],
        "display": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "500" }],
        "title": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", fontWeight: "500" }],
        "body-lg": ["1.5rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["1.125rem", { lineHeight: "1.8", fontWeight: "400" }],
        "caption": ["0.8rem", { lineHeight: "1.5", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        "section": "10rem",
        "paragraph": "2rem",
      },
      maxWidth: {
        "reading": "42.5rem",
      },
      letterSpacing: {
        "widest-custom": "0.15em",
      },
    },
  },
  plugins: [],
}

export default config
