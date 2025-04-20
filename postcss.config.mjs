const config = {
  plugins: ["@tailwindcss/postcss"],
  // Add to your tailwind config
  extend: {
    transitionProperty: {
      height: "height",
      width: "width",
    },
  },
  darkMode: "class",
};

export default config;
