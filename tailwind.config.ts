import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1728px",
      },
    },
    extend: {
      colors: {
        white: "var(--white)",
        primary_01: "var(--primary_01)",
        primary_02: "var(--primary_02)",
        primary_03: "var(--primary_03)",
        primary_04: "var(--primary_04)",
        primary_05: "var(--primary_05)",
        primary_06: "var(--primary_06)",
        secondary: "var(--secondary)",
        avatarSize: "236px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      padding: {
        section: "calc(10vw - 1rem)",
      },
      margin: {
        section: "6rem",
        "section-lg": "10rem",
      },
      fontSize: {
        "title-sm": "2rem",
        "title-lg": "4.5rem",
      },
      letterSpacing: {
        title: "-0.05em",
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities }) {
      addBase({
        html: {
          "scroll-behavior": "smooth",
        },
        body: {
          background: "#20232f", // --primary-03
        },
      });
      addUtilities({
        ".section": {
          "padding-left": "calc(10vw - 1rem)",
          "padding-right": "calc(10vw - 1rem)",
          "margin-top": "6rem",
          "@media (min-width: 1136px)": {
            "margin-top": "10rem",
          },
        },
        ".title": {
          "user-select": "none",
          padding: "2rem 0",
        },
        ".title span": {
          opacity: "0.8",
          "font-weight": "600",
          "text-transform": "uppercase",
          color: "#05edfd", // --primary-02
        },
        ".title h2": {
          "letter-spacing": "-0.05em",
          "font-size": "2rem",
          "line-height": "1",
          margin: "5px 0",
          color: "#05edfd", // --primary-02
          "@media (min-width: 768px)": {
            "font-size": "4.5rem",
          },
        },
        ".overlay": {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          "background-color": "rgba(0, 255, 255, 0.5)",
          "z-index": "1",
        },
        ".footer": {
          width: "100%",
          "margin-top": "80px",
          "background-color": "#394b60", // --primary-06
        },
        ".footer div": {
          padding: "40px 0",
          display: "flex",
          "justify-content": "center",
          color: "#05edfd", // --primary-02
        },
      });
    },
  ],
};

export default config;
