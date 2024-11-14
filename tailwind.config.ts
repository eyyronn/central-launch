import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0) translateY(0)" },
          "25%": { transform: "rotate(-8deg) translateY(-1px)" },
          "50%": { transform: "rotate(0px) translateY(0)" },
          "75%": { transform: "rotate(8deg) translateY(1px)" },
        },
      },
      animation: {
        wave: "wave 0.5s ease-in-out infinite",
      },
      colors: {
        sky: "#E2EDFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
