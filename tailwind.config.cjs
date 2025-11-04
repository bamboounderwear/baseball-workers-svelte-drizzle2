/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/ui/**/*.{svelte,ts}"
  ],
  theme: {
    extend: {},
    borderRadius: {
      none: "0",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor"
    }
  },
  corePlugins: {
    preflight: true,
  }
};