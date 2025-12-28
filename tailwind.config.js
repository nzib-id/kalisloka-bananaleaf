module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: false,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
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
