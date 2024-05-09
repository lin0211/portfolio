/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      "OAGothic-Medium": ["OAGothic-Medium"],
      "OAGothic-ExtraBold": ["OAGothic-ExtraBold"],
    },
    colors: {
      "main-gray": "#474747",
      "main-purple": "#755ac6",
      "main-lightGray": "#d9d9d9",
      "main-blue": "#6A8FDD",
    },
    extend: {},
  },
  plugins: [],
};
