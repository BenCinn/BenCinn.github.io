module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    nightwind: {
      transitionDuration: "500ms", // default '300ms'
    },
  },
  plugins: [require("nightwind")],
}
