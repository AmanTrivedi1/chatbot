/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "serif"], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
};
