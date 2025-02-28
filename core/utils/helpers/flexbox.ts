import { BoxProps } from "@mui/material";

const flexbox: Record<string, BoxProps> = {
  row: {
    display: "flex",
    flexDirection: "row",
  },
  rowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rowCenterCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowCenterBetween: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  colBetween: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  colCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  colCenterCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default flexbox;
