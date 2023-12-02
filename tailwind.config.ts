/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        primary: "#04724D",
        secondary: "#B8DBD9",
        accent: "#687a8d",
        whiteSmoke: "#F5F5F5",
        mintGreen: "#DEFFF2",
        midnight_green: {
          DEFAULT: "#104f55",
          100: "#031011",
          200: "#072022",
          300: "#0a3033",
          400: "#0d4045",
          500: "#104f55",
          600: "#1d909a",
          700: "#31cad8",
          800: "#76dce5",
          900: "#baedf2",
        },
        myrtle_green: {
          DEFAULT: "#32746d",
          100: "#0a1816",
          200: "#142f2c",
          300: "#1e4743",
          400: "#285e59",
          500: "#32746d",
          600: "#47a69c",
          700: "#6fc1b9",
          800: "#9fd6d1",
          900: "#cfeae8",
        },
        cambridge_blue: {
          DEFAULT: "#9ec5ab",
          100: "#1b2d21",
          200: "#365941",
          300: "#508662",
          400: "#73ab85",
          500: "#9ec5ab",
          600: "#b3d1bd",
          700: "#c6ddcd",
          800: "#d9e8de",
          900: "#ecf4ee",
        },
        dark_green: {
          DEFAULT: "#01200f",
          100: "#000603",
          200: "#000c06",
          300: "#011208",
          400: "#01180b",
          500: "#01200f",
          600: "#047b39",
          700: "#07d865",
          800: "#45f996",
          900: "#a2fccb",
        },
        night: {
          DEFAULT: "#011502",
          100: "#000400",
          200: "#000801",
          300: "#010c01",
          400: "#011001",
          500: "#011502",
          600: "#05710b",
          700: "#0acf14",
          800: "#44f64d",
          900: "#a1fba6",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      darkMode: "class",
      plugins: [],
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
