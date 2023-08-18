import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#005F59",
    },
    secondary: {
      main: "#FECD08",
      dark: "#FDCC07",
    },
  },
  typography: {
    button: { textTransform: "none" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#005F5980",
            },
          },
        },
      },
    },
  },
});