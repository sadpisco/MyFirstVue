/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "375px",
        headerBg: "1400px",
        layout: "1280px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
