/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = [
  "Open Sans", // <-- Roboto is a default sans font now
  "system-ui",
  // <-- you may provide more font fallbacks here
];

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: fontFamily, // <-- this is where the override is happening
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
