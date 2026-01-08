import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3182ed",
        "background-light": "#ffffff",
        "background-dark": "#101822",
        "background-secondary-light": "#f8fafc",
        "background-secondary-dark": "#1e293b",
        "text-main": "#0d131b",
        "text-muted": "#4c6e9a",
        "border-subtle": "#cfdae7",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      boxShadow: {
        "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.05)",
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
