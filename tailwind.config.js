/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray100: "#38343D",
      gray200: "#686071",
      gray300: "#09090A",
      gray400: "#F4EFFA",
      gray500: "#FDFCFE",
      primary: "#f3f4f3",
      red: "#AA2222",
    },
  },
  plugins: [],
};
