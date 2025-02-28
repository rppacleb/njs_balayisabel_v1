import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { customStyles } from "./customStyles";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
  const pageTheme = createTheme({
    palette: {
      background: {
        default: "#F2EFE7",
        primary: "#F2EFE7",
      },
      primary: {
        main: "#28292C",
        light: "#edeae6",
      },
      secondary: {
        main: "#1915AF",
        light: "#424548",
      },
      complementary: {
        blue1: "#1915AF",
        blue2: "#3d0fa7",
        dark1: "#000000",
        dark2: "#121316",
        dark3: "#191A1D",
        dark4: "#1D1D1F",
        dark5: "#42454A",
        dark6: "#2F2E30",
        green1: "#43a047",
        cream1: "#CAC3BC",
        cream2: "#a8a6a3",
      },
      gradient: {
        darkToBlue:
          "linear-gradient(54deg, rgba(18,19,22,1) 0%, rgba(19,24,29,1) 45%, rgba(25,46,58,1) 81%, rgba(29,64,81,1) 100%, rgba(31,73,93,1) 100%)",
        darkTogreen: "linear-gradient(54deg, rgba(18,19,22,1) 0%, rgba(22,30,26,1) 48%, rgba(37,73,41,1) 100%)",
        darkToLightBlue:
          "linear-gradient(90deg, rgba(39,38,40,1) 0%, rgba(32,37,42,1) 39%, rgba(12,42,57,1) 77%, rgba(31,73,93,1) 93%)",
      },
      backShadow: {},
    },
    transitions: {},
    breakpoints: {
      values: {
        xxs: 0, // MOBILE_0
        xs: 360, // MOBILE_S
        sm: 600, // MOBILE_M
        md: 800, // TABLET
        lg: 1025, // LAPTOP_S
        container: 1200, //DEFAULT CONTAINER
        xl: 1280, // LAPTOP_M
        xxl: 1440, // LAPTOP_L
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
      fontFamily: '"Inter"',
    },
    customStyles,
  });

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
