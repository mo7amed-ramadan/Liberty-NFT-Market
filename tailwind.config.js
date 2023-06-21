/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/src/Images/banner-bg.jpg')",
      },
      colors: {
        mainColor: "#7453fc",
      },
    },
  },
  plugins: [],
};
