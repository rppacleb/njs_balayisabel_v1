import { Face3Outlined as IFace3Outlined } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { Typography } from "@/core/components/DataDisplay";
import { __LOCALDB } from "@/core/utils/database";
import { Container } from "@/core/components/Layout";
import { __TBL } from "@/core/utils/enum";
import { shallowEqual, useSelector } from "react-redux";
import { useEffect } from "react";
import { LocalSessionType } from "@/core/types/common";
import { flexbox } from "@/core/utils/helpers";
import { createSelector } from "@reduxjs/toolkit";
import { DispatchType, RTKStateType, useAppDispatch } from "@/core/redux/store";

const app_state_selector = createSelector(
  (state: RTKStateType) => state?.app,
  (state) => state
);

const Main = ({ __LOCALSESSION }: LocalSessionType) => {
  const __SESSION = JSON.parse(__LOCALSESSION);
  const dispatch: DispatchType = useAppDispatch();
  const app_state = useSelector(app_state_selector, shallowEqual);
  const theme = useTheme();
  const { palette } = theme;

  useEffect(() => {
    const __init = async () => {
      const getHspList = await __LOCALDB.read(__TBL.HOSPITALS, "all");
      // getHspList.sort((a, b) => b.id - a.id);
      console.log(getHspList);
    };

    __init();
  }, []);

  return (
    <Container maxWidth={1200} sx={{ container: { py: 5 } }}>
      <Box p={3.5} mb={7} bgcolor={palette.primary.main} borderRadius={2} {...flexbox.rowCenter}>
        <Box p={2} bgcolor={palette.complementary.dark2} borderRadius={2} mr={10}>
          <IFace3Outlined sx={{ fontSize: 46 }} />
        </Box>
        <Typography text={`Welcome ${__SESSION.fullname}!`} sx={{ fontSize: 32, fontWeight: 600 }} />
      </Box>
      <Typography text="Your monthly insights" variant="body1" sx={{ fontSize: 16, fontWeight: 600, mb: 3 }} />
    </Container>
  );
};

export default Main;
