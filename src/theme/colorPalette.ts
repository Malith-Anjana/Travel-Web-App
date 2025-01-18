// Augment the palette to include a violet color
declare module '@mui/material/styles' {
    interface Palette {
      accent: Palette['primary'];
    }
  
    interface PaletteOptions {
      accent?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include a violet option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      accent: true;
    }
  }

export default {
  primary: {
    main: "#1bb759",
    light: "#E8F7EE",
    dark: "#159247",
  },
  secondary: {
    main: "#039be5",
    light: "#e1f5fe",
    dark: "#0277bd",
  },
  text:{
    primary: "#11181c",
    disabled: "#6A6A6A",
    secondary: "#000000",
  },
  accent:{                      //for button
    main: "#000000",
    light: "#11181c",
  }
};
