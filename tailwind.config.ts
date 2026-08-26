import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F2E7",
        "paper-dark": "#EFE7D6",
        ink: "#1E2438",
        "ink-soft": "#4A4F63",
        red: {
          pen: "#C4342D",
          dark: "#9A2620"
        },
        green: {
          margin: "#3F7A5C",
          light: "#E7F0EA"
        },
        amber: {
          stamp: "#C98A2C",
          light: "#F6EBD6"
        },
        navy: {
          DEFAULT: "#20345C",
          light: "#EDF0F8"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 1px 1px, rgba(30,36,56,0.06) 1px, transparent 0)"
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,36,56,0.06), 0 8px 24px -12px rgba(30,36,56,0.18)",
        lift: "0 4px 6px rgba(30,36,56,0.08), 0 16px 32px -16px rgba(30,36,56,0.25)"
      },
      keyframes: {
        "draw-circle": {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" }
        },
        stamp: {
          "0%": { transform: "scale(2.2) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(0.95) rotate(-8deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-8deg)", opacity: "1" }
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "draw-circle": "draw-circle 0.9s ease forwards",
        stamp: "stamp 0.5s cubic-bezier(.2,1.4,.4,1) forwards",
        float: "float 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
