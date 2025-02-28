import React from "react";
import { Typography as MUITypography, useTheme } from "@mui/material";
import { TypographyType } from "./typography";

const Typography = ({
  text,
  sx = {},
  variant = "body1",
  onClick,
}: TypographyType) => {
  return (
    <MUITypography variant={variant} sx={sx} onClick={onClick}>
      {text}
    </MUITypography>
  );
};

export default Typography;
