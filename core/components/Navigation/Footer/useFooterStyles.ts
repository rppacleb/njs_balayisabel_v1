import { flexbox } from "@/core/utils/helpers";
import { useTheme } from "@mui/material";

const useFooterStyles = () => {
  const theme = useTheme();

  return {
    mainContainer: {
      padding: "4rem 0",
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.complementary.dark2,
      ...flexbox.rowCenterCenter,
    },
  };
};

export default useFooterStyles;
