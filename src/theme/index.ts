import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import typographies from "./typographies";
import colorPalette from "./colorPalette";

export const theme = createTheme({
  typography: typographies,
  palette: colorPalette,
  spacing: (factor: number) => `${factor * 0.5}rem`, // Default is 8px, but we're multiplying by 0.5rem (8px -> 0.5rem)
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, Arial, sans-serif", // Ensure Poppins is applied globally
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px", // Rounded corners
          textTransform: "none", // Disable uppercase text
          color:'#ffff'
        },
      }
  },
}
});
