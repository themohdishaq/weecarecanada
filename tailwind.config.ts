import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f5f2",
          100: "#dde7e0",
          400: "#4f7d68",
          600: "#2c4a3e",
          700: "#213a30",
          900: "#162922",
        },
        sage: {
          50: "#f7f8f4",
          100: "#e8ede4",
          200: "#d6e0cf",
        },
        cream: {
          DEFAULT: "#faf8f3",
        },
        gold: {
          400: "#c9a227",
          500: "#b08e1f",
        },
        clay: {
          500: "#a8553f",
        },
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        body: ["var(--font-karla)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        sm: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
