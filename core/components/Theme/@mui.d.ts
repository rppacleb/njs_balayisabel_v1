import { ObjectType } from "@/core/types/common";
import "@mui/material/styles";
import "@mui/material/Typography";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    customStyles: {
      BTNPrimary: CSSProperties;
      BTNSecondary: CSSProperties;
      INPPrimary: CSSProperties;
      INPSearch: CSSProperties;
      INPHspForm: CSSProperties;
    };
  }

  interface Palette {
    complementary: {
      blue1: string;
      blue2: string;
      dark1: string;
      dark2: string;
      dark3: string;
      dark4: string;
      dark5: string;
      dark6: string;
      green1: string;
      cream1: string;
      cream2: string;
    };
    gradient: {
      darkToBlue: string;
      darkTogreen: string;
      darkToLightBlue: string;
    };
    backShadow: ObjectType;
  }

  interface ThemeOptions {
    customStyles: {
      BTNPrimary: CSSProperties;
      BTNSecondary: CSSProperties;
      INPPrimary: CSSProperties;
      INPSearch: CSSProperties;
      INPHspForm: CSSProperties;
    };
  }

  interface PaletteOptions {
    complementary: {
      blue1: string;
      blue2: string;
      dark1: string;
      dark2: string;
      dark3: string;
      dark4: string;
      dark5: string;
      dark6: string;
      green1: string;
      cream1: string;
      cream2: string;
    };
    gradient: {
      darkToBlue: string;
      darkTogreen: string;
      darkToLightBlue: string;
    };
    backShadow: ObjectType;
  }

  interface TypeBackground {
    primary?: string;
  }

  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    container: true;
    xl: true;
    xxl: true;
  }
}
