import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      white: "#ffffff",
      black: "#000000",
      "primary-light": "#FAEDCD",
      "primary-full": "#D4A373",
      "primary-lightest": "#FEFAE0",
      "secondary-full": "#CCD5AE",
      "secondary-light": "#E9EDC9",
      blue: "#00B2FF",
      red: "#FF4242",
      green: "#47D945",
      gray: "#9B9B9B",
      "gray-o-10": "rgba(155, 155, 155, 0.1)",
      "gray-o-50": "rgba(155, 155, 155, 0.5)",
      neutral: {
        900: "#212529",
        800: "#343A40",
        700: "#495057",
        600: "#6C757D",
      },
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-geist-mono)"],
        serif: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
