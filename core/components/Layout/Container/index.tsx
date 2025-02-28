import React from "react";
import { Box, SxProps, Theme } from "@mui/material";
import MUIContainer from "@mui/material/Container";
import { ContainerType } from "./container";
import { breakpoints } from "@/core/utils/helpers";

const Container = ({
  children,
  fullWidth = false,
  fullContent = false,
  maxWidth = 1200,
  maxContent = 1200,
  sx,
  component = "div",
}: ContainerType) => {
  const { isSM, isMD } = breakpoints("down");

  const ContainerElement = ({
    classes,
    maxWidth = 1200,
  }: {
    classes: SxProps<Theme>;
    maxWidth: string | number;
  }) => (
    <MUIContainer
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth,
        [isMD]: {
          padding: "0 2rem",
        },
        [isSM]: {
          padding: "0 1.25rem !important",
        },
        ...classes,
      }}
    >
      {children}
    </MUIContainer>
  );

  return (
    <>
      {fullWidth ? (
        <Box sx={sx?.container} component={component}>
          <ContainerElement
            classes={sx?.content ?? {}}
            maxWidth={fullContent ? "100%" : maxContent}
          />
        </Box>
      ) : (
        <ContainerElement classes={sx?.container ?? {}} maxWidth={maxWidth} />
      )}
    </>
  );
};

export default Container;
