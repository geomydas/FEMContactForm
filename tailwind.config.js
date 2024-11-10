import fluid, { extract } from "fluid-tailwind";

module.exports = {
  content: {
    files: ["./src/**/*.{html,js}"],
    extract,
  },
  theme: {
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem",
      "2xl": "96rem",
    },
    colors: {
      "green-200": "hsl(148, 38%, 91%)",
      "green-600": "hsl(169, 82%, 27%)",
      red: "hsl(0, 66%, 54%)",
      white: "hsl(0, 0%, 100%)",
      "grey-500": "hsl(186, 15%, 59%)",
      "grey-900": "hsl(187, 24%, 22%)",
    },
    fontFamily: {
      karla: ["Karla", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    fluid({
      checkSC144: false, 
    }),
  ],
};
