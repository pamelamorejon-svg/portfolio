import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EFE3CF",
        sky: "#D5E5F0",
        page: "#F5F2ED",
        ink: "#1B1B1B",
        muted: "#5C5C5C",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
