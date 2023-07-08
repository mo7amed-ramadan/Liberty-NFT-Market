/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/src/Images/banner-bg.jpg')",
        categoryCollectionBg: "url('/src/Images/dark-bg.jpg')",
        createNftBg: "url('/src/Images/main-bg.jpg')",
        footerBg:
          "linear-gradient(132deg, rgba(125,90,254,1) 25%, rgba(160,84,244,1) 100%)",
      },
      colors: {
        mainColor: "#7453fc",
        cardColor: "#282b2f",
        borderColor: "#404245",
      },
      fontFamily: {
        body: ["Roboto"],
      },
    },
    screens: {
      // Max width
      "m-3xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "m-xl": { max: "1280px" },
      // => @media (max-width: 1280px) { ... }
      "m-lg": { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      "m-md": { max: "850px" },
      // => @media (max-width: 768px) { ... }
      "m-sm": { max: "415px" },
      // => @media (max-width: 400px) { ... }

      // Min width
      "2xl": { min: "1400px" },
      // => @media (min-width: 1400px) {...}
    },
  },
  plugins: [],
};
