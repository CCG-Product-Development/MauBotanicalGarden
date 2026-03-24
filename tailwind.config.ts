import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf9f6",
        foreground: "#1a1a1a",
        primary: {
          DEFAULT: "#4a7c59",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#6b8e23",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f5f0",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#8fbc8f",
          foreground: "#1a1a1a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
