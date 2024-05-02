/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'tt-wellingtons': ['TT Wellingtons', 'sans-serif'],
        'open-sauce': ['Open Sauce', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
