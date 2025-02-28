import React from "react";
import { Box, Typography } from "@mui/material";
import useMaintenanceStyles from "./useMaintenanceStyles";

const Maintenance = () => {
  const style = useMaintenanceStyles();
  return (
    <Box sx={style?.mainContainer}>
      <Typography variant="body1" sx={style?.textParagraph}>
        Sorry, our website is under construction. We are currently adding new
        features and fixing some minor bugs.
      </Typography>
    </Box>
  );
};

export default Maintenance;
