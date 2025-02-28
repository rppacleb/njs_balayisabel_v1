import { Box, BoxProps, Palette } from "@mui/material";
import { Typography } from "@/core/components/DataDisplay";
import { Button } from "@/core/components/Inputs";

type MenuManagementType = {
  flexbox: Record<string, BoxProps>;
  palette: Palette;
  redirectHandler: (route: string) => void;
};

export const MenuManagement = ({
  flexbox,
  palette,
  redirectHandler,
}: MenuManagementType) => {
  return (
    <Box
      bgcolor={palette.complementary.dark6}
      borderRadius={2}
      width={180}
      sx={{ position: "absolute", right: 0 }}
      {...flexbox.col}
    >
      <Button fullWidth sx={{ justifyContent: "flex-start", fontSize: 12 }}>
        Manage Menu 1
      </Button>
      <Button fullWidth sx={{ justifyContent: "flex-start", fontSize: 12 }}>
        Manage Menu 2
      </Button>
      <Button
        fullWidth
        sx={{ justifyContent: "flex-start", fontSize: 12 }}
        onClick={() => redirectHandler("/management/hospitals")}
      >
        Manage Hospitals
      </Button>
    </Box>
  );
};
