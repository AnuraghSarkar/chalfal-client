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
          DEFAULT: "#383C4A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
