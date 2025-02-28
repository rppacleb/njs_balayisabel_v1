import { TextField as MUITextField, InputAdornment, useTheme } from "@mui/material";
import { FastField, FieldAttributes, getIn } from "formik";
import { isNull } from "@/core/utils/common";

type TextFieldType = FieldAttributes<any>;

const BaseField = ({
  sx = {},
  adornment = null,
  helperText,
  form: { isSubmitting, touched, errors },
  field,
  showError = true,
  ...props
}: TextFieldType) => {
  const {
    customStyles: { INPPrimary },
  } = useTheme();
  const formError = getIn(errors, field.name);
  const hasError = showError && !!getIn(touched, field.name) && !!formError;
  const errMsg = hasError ? formError : helperText;

  const theming = () => {
    return { ...INPPrimary, ...sx };
  };

  return (
    <MUITextField
      sx={{ ...theming() }}
      error={hasError}
      helperText={errMsg}
      {...props}
      {...field}
      disabled={isSubmitting}
      {...(!isNull(adornment)
        ? {
            [`${adornment.position}Adornment`]: (
              <InputAdornment position={adornment.position}>
                <adornment.Render />
              </InputAdornment>
            ),
          }
        : {})}
    />
  );
};

const TextField = (
  props: {
    variant?: string;
  } & Omit<TextFieldType, "variant">
) => {
  return <FastField {...props} component={BaseField} />;
};
export default TextField;
