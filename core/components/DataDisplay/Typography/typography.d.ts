import { ObjectType } from "@/core/types/common";
import { Variant } from "@mui/material/styles/createTypography";

export type TypographyType = {
  text: string;
  sx?: ObjectType;
  variant?: Variant;
  onClick?: () => void;
};
