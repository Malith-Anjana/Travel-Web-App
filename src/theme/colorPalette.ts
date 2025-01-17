// Augment the palette to include a violet color
declare module '@mui/material/styles' {
    interface Palette {
      texts: Palette['primary'];
    }
  
    interface PaletteOptions {
      texts?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include a violet option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      texts: true;
    }
  }

export default {
  primary: {
    main: "#00897b",
    light: "#e0f2f1",
    dark: "#00695c",
    contrastText: "#004d40"
  },
  secondary: {
    main: "#039be5",
    light: "#e1f5fe",
    dark: "#0277bd",
    contrastText: "#01579b",
  },
  texts:{
    main: "#11181c",
    light: "#6A6A6A",
    dark: "#000",
  }
};
