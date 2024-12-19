/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        worksans: ["Work Sans"],
        montserrat: ["Montserrat"],
        opensans: ["Open Sans"],
        raleway: ["Raleway"],
        poppins: ["Poppins"],
      }
    },
  },
  plugins: [],
};
