module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        chalfal_color: {
          DEFAULT: "#030303",
          brighter: "#1a1a1a",
          brightest: "#272728",
        },
        chalfal_border: {
          DEFAULT: "#343536",
        },
        chalfal_text: {
          DEFAULT: "rgb(215, 218, 220)",
          darker: "#818384",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
