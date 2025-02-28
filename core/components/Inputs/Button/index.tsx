import { ButtonProps, Button as MUIButton, useTheme } from "@mui/material";
import { ButtonType } from "./button";

const Button = ({
  children,
  label,
  variant = "contained",
  theme,
  sx = {},
  onClick = () => {},
  startIcon,
  endIcon,
  ...props
}: ButtonType) => {
  const {
    customStyles: { BTNPrimary, BTNSecondary },
  } = useTheme();

  const theming = () => {
    let theming =
      theme === "primary"
        ? BTNPrimary
        : theme === "secondary"
        ? BTNSecondary
        : {};
    return { ...theming, ...sx };
  };

  return (
    <MUIButton
      sx={{ ...theming() }}
      {...props}
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
