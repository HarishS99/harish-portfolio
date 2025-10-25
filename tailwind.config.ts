import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Inter", "Arial", "Noto Sans", "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]
      }
    },
  },
  plugins: [],
};
export default config;
