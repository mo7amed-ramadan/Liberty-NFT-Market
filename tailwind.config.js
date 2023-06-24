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
    screens: {
      "m-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "m-xl": { max: "1280px" },
      // => @media (max-width: 1279px) { ... }
      "m-lg": { max: "1024px" },
      // => @media (max-width: 1023px) { ... }
      "m-md": { max: "768px" },
      // => @media (max-width: 767px) { ... }
      "m-sm": { max: "400px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
