module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
        linear1: "hsl(0, 80%, 86%)",
        linear2: "hsl(0, 74%, 74%)",
      },
      backgroundImage: {
        "gradient-to-light":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-to-mid":
          "linear-gradient(135deg, hsl(0, 100%, 98%), hsl(0, 80%, 86%))",
      },
      fontFamily: {
        serif: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
