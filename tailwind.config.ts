import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06080B",
        surface: "#0D1117",
        raised: "#141B24",
        accent: "#0EA5E9",
        "accent-dim": "#0369A1",
        gold: "#D4AF72",
        "text-primary": "#F0F4F8",
        "text-secondary": "#8FA3B8",
        "text-muted": "#4A5C6E",
        border: "rgba(14,165,233,0.12)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
