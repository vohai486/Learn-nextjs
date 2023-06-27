import { Roboto, Heebo } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Heebo({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: "#FF6464",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#00A8CC",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#21243D",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: "680px",
          "@media (min-width: 600px)": { maxWidth: "680px" },
        },
        maxWidthMd: {
          maxWidth: "680px",
          "@media (min-width: 900px)": { maxWidth: "860px" },
        },
      },
      defaultProps: {
        maxWidth: "md",
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "black",
          "&:hover, &.active": {
            color: "#FF6464",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: {
            color: "secondary",
          },
          style: {
            fontWeight: "bold",
            backgroundColor: "#142850",
            fontSize: 16,
            color: "white",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
