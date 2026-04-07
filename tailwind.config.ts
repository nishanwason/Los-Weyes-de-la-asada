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
        bg: "#0d0d0d",
        surface: "#1a1008",
        fire: "#e85d04",
        ember: "#f48c06",
        gold: "#ffd60a",
        smoke: "#3d3028",
        cream: "#fdf0d5",
        red: "#c1121f",
        green: "#386641",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        accent: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 100%": { textShadow: "0 0 20px #e85d04, 0 0 40px #f48c06, 0 0 80px #e85d04" },
          "50%": { textShadow: "0 0 10px #e85d04, 0 0 20px #f48c06, 0 0 40px #e85d04" },
        },
        flameWiggle: {
          "0%, 100%": { transform: "rotate(-5deg) scale(1)" },
          "50%": { transform: "rotate(5deg) scale(1.1)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        flicker: "flicker 2.5s ease-in-out infinite",
        flameWiggle: "flameWiggle 1.5s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
