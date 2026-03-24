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
        primary: "#4a7c59",
        "primary-dark": "#3d6b4a",
        "primary-light": "#5a9469",
        accent: "#6b8e23",
        background: "#ffffff",
        foreground: "#1a1a1a",
        muted: "#f5f5f5",
        "muted-foreground": "#6b7280",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
