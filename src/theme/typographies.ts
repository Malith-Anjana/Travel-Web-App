import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import colorPalette from "./colorPalette";

export default {
  htmlFontSize: 10 /* 62.5% of 16px = 10px */,
  fontFamily: "Poppins,Arial, sans-serif",
  h1: {
    fontSize: "3.6rem", // Base font size
    fontWeight:400,
    lineHeight: "4.4rem",
    color:colorPalette.text.primary,
    [createTheme().breakpoints.up(breakpoints.lg)]: {
      fontSize: "4rem", // Font size for lg screens
      lineHeight: "5.4rem",
    },
  },
  h2: {
    fontSize: "2.4rem",
    fontWeight:400,
    lineHeight: "3.6rem",
    color:colorPalette.text.primary,
    [createTheme().breakpoints.up(breakpoints.lg)]: {
      fontSize: "3rem",
      lineHeight: "4.5rem",
    },
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    color:colorPalette.text.primary,
    [createTheme().breakpoints.up(breakpoints.lg)]: {
      fontSize: "1.9rem",
    },
  },
  body1: { fontSize: "1.6rem", lineHeight: "2.4rem", color:colorPalette.text.primary },
  body2: { fontSize: "1.4rem", lineHeight: "2.1rem", color:colorPalette.text.primary },
};
