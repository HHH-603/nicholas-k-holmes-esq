/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        background: "#e6e6e6",
        backgroundDark: "#C2C2C2",
      },
      height: {
        "88%": "88%",
      },
    },
  },
  plugins: [],
};
