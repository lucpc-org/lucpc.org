import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1530px",
    },
    colors: {
      foreground: "#dfdfdf",
      white: "#fff",
      black: "#000",
      background: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#323232",
        700: "#292929",
        800: "#202020",
        900: "#171717",
        950: "#0a0a0a",
      },
      green: {
        50: "#eefbf3",
        100: "#d6f5e1",
        200: "#b1e9c8",
        300: "#7dd8a8",
        400: "#48bf84",
        500: "#25a469",
        600: "#178454",
        700: "#136946",
        800: "#115438",
        900: "#0f4530",
        950: "#07271b",
      },
      blue: {
        50: "#f0f8ff",
        100: "#e0effe",
        200: "#bae0fd",
        300: "#7ec7fb",
        400: "#39abf7",
        500: "#1e9bf0",
        600: "#0372c6",
        700: "#045aa0",
        800: "#084d84",
        900: "#0d416d",
        950: "#082949",
      },

      easy: "#3DA35D",
      medium: "#E6B749",
      hard: "#FF2B56",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        serif: ["'Newsreader'", ...fontFamily.serif],
        livory: ["Livory", ...fontFamily.serif],
      },
      boxShadow: {
        lg: "0 4px 8px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
