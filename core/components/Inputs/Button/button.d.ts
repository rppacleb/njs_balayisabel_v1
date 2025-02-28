import { ButtonProps } from "@mui/material";

export type ButtonType = ButtonProps & {
  label?: string;
  theme?: "primary" | "secondary";
};
