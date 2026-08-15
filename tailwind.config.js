/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#050607",
          soft: "#0A0C0E",
        },
        surface: {
          DEFAULT: "#0D1013",
          2: "#12161B",
          line: "#1D2329",
        },
        blue: {
          electric: "#1E9BD7",
          cyan: "#2AB6E8",
          deep: "#0E4C6B",
          glow: "#5FD3F5",
        },
        silver: {
          DEFAULT: "#E8E8E8",
          dim: "#98A2AC",
          faint: "#5C646C",
        },
      },
      fontFamily: {
        display: ["'Chakra Petch'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(42,182,232,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(42,182,232,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(42,182,232,0.25)",
        "glow-md": "0 0 40px rgba(42,182,232,0.3)",
        "glow-lg": "0 0 80px rgba(30,155,215,0.25)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-14px,0) rotate(1deg)" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
