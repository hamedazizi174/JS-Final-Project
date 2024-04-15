/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./main.js"],
  theme: {
    extend: {
      fontSize: {
        40: "40px",
        32: "32px",
        10: "10px",
      },
      colors: {
        dark: "#212529",
        primary: "#152536",
        lightGrey: "#fafafa",
      },
    },
  },
  plugins: [],
};
