import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

// Supports weights 300-900
import Figtree from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2';

export const theme = createTheme({
    palette: {
        primary: teal,
    },
    typography: {
      fontFamily: 'Figtree Variable'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "@font-face": {
            fontFamily: 'Figtree Variable',
            fontStyle: "normal",
            src: `url(${Figtree}) format('woff2-variations')`
          },
        }
      }
    }
  });