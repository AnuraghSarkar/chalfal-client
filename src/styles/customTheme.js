import { createTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#18e0ae" : "#c502df",
      },
      secondary: {
        main: darkMode ? "#ffffff" : "#5402ed",
      },
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: "break-word",
        },
      },
    },
  });

export default customTheme;
