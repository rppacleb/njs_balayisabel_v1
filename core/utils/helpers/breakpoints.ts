import { Breakpoint, Theme, useTheme } from "@mui/material";

const breakpoints = (key: "up" | "down" | "between" | "only") => {
  const theme: Theme = useTheme();
  const breakpointFn = theme.breakpoints[key] as (value: Breakpoint) => string;

  return {
    isXXS: breakpointFn("xxs"),
    isXS: breakpointFn("xs"),
    isSM: breakpointFn("sm"),
    isMD: breakpointFn("md"),
    isLG: breakpointFn("lg"),
    isContainer: breakpointFn("container"),
    isXL: breakpointFn("xl"),
    isXXL: breakpointFn("xxl"),
  };
};

export default breakpoints;
