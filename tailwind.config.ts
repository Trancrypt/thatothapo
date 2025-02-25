
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#4a0000", // dark maroon
          lighter: "#600000",
        },
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#ea384c", // vibrant red
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#4a5568", // dark gray
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ff4d5f", // bright red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9ca3af",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
