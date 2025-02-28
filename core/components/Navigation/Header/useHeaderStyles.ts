/* eslint-disable react-hooks/rules-of-hooks */
import { breakpoints, flexbox } from "@/core/utils/helpers";
import { useTheme, useMediaQuery } from "@mui/material";

const useHeaderStyles = (scrolled: boolean) => {
  const { isContainer, isMD } = breakpoints("down");
  const hideMenus = useMediaQuery(isContainer);
  const theme = useTheme();

  return {
    hideMenus,
    mainContainer: {
      ...flexbox.allCenter,
      background: theme.palette.complementary.dark2,
      boxShadow: scrolled ? theme.palette.backShadow.lightOrDarkRim : "unset",
      padding: "1.5rem 0",
      width: "100%",
      height: 48,
      color: theme.palette.primary.light,
      left: 0,
      top: "-0.0625rem",
      paddingRight: "unset !important",
      [isMD]: {
        padding: "0.75rem 0",
      },
    },
  };
};

export default useHeaderStyles;
