import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#18e0ae" : "#c502df",
      },
      secondary: {
        main: darkMode ? "#666769" : "#5402ed",
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
