/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('../assets/Logo.png')",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        yellow: {
          400: "#FFAD1D",
          300: "#FFC668",
          200: "#FFDEA4",
          100: "#FEF8E0",
        },
        blue: {
          400: "#09051C",
          300: "#444352",
          200: "#86848F",
          100: "#CECDD2",
        },
        orange: {
          400: "#DA6317",
          300: "#E38751",
          200: "#E6A986",
          100: "#E3CBBC",
        },
      },
    },
  },
  plugins: [],
};
