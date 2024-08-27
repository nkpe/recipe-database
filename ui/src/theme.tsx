import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

// Supports weights 300-900
import '@fontsource-variable/figtree';

export const theme = createTheme({
    palette: {
        primary: teal,
    },
    typography: {
        fontFamily: 'Figtree Variable'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Figtree Variable';
                    font-style: normal;
                    font-display: swap;
                    font-weight: 300 900;
                    src: url(@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2) format('woff2-variations');
                    unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
                }
            `
        }
    }
})