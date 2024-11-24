/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fuchsia: {
          50: "#FDF4FF",
          100: "#FAE7FF",
          200: "#F7CFFF",
          300: "#F4A9FE",
          400: "#EE75FD",
          500: "#DE34F3",
          600: "#C821D8",
          700: "#A818B3",
          800: "#8C1692",
          900: "#741778",
          950: "#4E0250",
        },
        shark: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#1F1F1F",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: "#DE34F3", // fuchsia-500
            foreground: "#ffffff", // texto en botones primary
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: "#DE34F3", // fuchsia-500
            foreground: "#ffffff", // texto en botones primary
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
