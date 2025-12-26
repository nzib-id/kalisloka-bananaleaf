module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: false,
      padding: {
        DEFAULT: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["LT Glockenspiel", "serif"],
      },
      maxWidth: {
        heroText: "680px",
      },
    },
  },
  plugins: [],
};
