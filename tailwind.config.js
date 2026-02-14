/** @type {import('tailwindcss').Config} */
// trigger rebuild
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        light: "#f9f9f9",
        dark: "#20232f",

        // Primary palette
        charcoal: "#36383f",
        cyan: "#05edfd",
        magenta: "#a83279",
        slate: "#67788c",
        steel: "#394b60",

        // Secondary
        pink: "#ec4899",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Space Grotesk Placeholder"', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
};
