
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#4F46E5",
        accent: "#7C3AED",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        "text-primary": "#111827",
        "text-secondary": "#4B5563",
        background: "#FFFFFF",
        "background-alt": "#F3F4F6",
      },
      borderRadius: {
        xl: "12px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
