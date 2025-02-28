import { BoxProps, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type ContainerType = Omit<BoxProps, "sx"> & {
  fullWidth?: boolean;
  fullContent?: boolean;
  maxWidth?: number;
  maxContent?: number;
  sx: SxProps<Theme> & { container?: SxProps<Theme>; content?: SxProps<Theme> };
};
