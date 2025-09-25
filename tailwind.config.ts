module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "3rem",
        h2: "2rem",
        p: "1rem",
      },
      fontWeight: {
        bold: "700",
        normal: "400",
      },
      lineHeight: {
        h1: "1.2",
        h2: "1.3",
        p: "1.6",
      },
      colors: {
        primary: "#41b4bb",
      },
    },
  },
  plugins: [],
};
