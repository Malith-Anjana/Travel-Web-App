import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import typographies from "./typographies";
import colorPalette from "./colorPalette";

export const theme = createTheme({
  typography: typographies,
  palette: colorPalette,
  // spacing: (factor: number) => `${factor * 0.5}rem`, //Root font size is set to 10px(16px * 62.5%). Then 1rem = 10px Default is 8px, but we're multiplying by 0.5rem (8px -> 0.5rem).
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, Arial, sans-serif",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 .4rem rgba(0, 0, 0, 0.2)",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          paddingLeft: "2rem",
          paddingRight: "2rem",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        disableRipple: true,
        color: "accent",
      },
      styleOverrides: {
        root: {
          borderRadius: "5rem", // Rounded corners
          textTransform: "none", // Disable uppercase text
          color: "#FFFFFF",
          boxShadow: "none",
          padding:'1.6rem 3.2rem'
        },
      },
    },
  },
});
