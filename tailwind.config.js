import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */

const rotate = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
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

    extend: {
      colors: {
        "main-gray": "#474747",
        "main-purple": "#755ac6",
        "main-lightGray": "#d9d9d9",
        "main-blue": "#6A8FDD",
        white: "#ffffff",
      },
    },
  },
  plugins: [rotate],
};
