import { useState, useEffect, useRef } from "react";
import { AppBar, Box, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import useHeaderStyles from "./useHeaderStyles";
import { Container } from "@/core/components/Layout";
import { Typography } from "@/core/components/DataDisplay";
import { Button } from "@/core/components/Inputs";
import { cookie } from "@/core/utils/cache/cookie";
import { MenuManagement } from "./Menu";
import { flexbox } from "@/core/utils/helpers";
import { ObjectType } from "@/core/types/common";
import { Logout } from "@mui/icons-material";

const Header = ({ __LOCALSESSION }: { __LOCALSESSION: ObjectType }) => {
  const __SESSION = JSON.parse(__LOCALSESSION);
  const router = useRouter();
  const theme = useTheme();
  const { palette } = theme;
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpened, setisMenuOpened] = useState(false);
  const styles = useHeaderStyles(scrolled);
  const menu = [
    { label: "Home", url: "/", active: router.pathname === "/" ? true : false },
    { label: "Menu 2", url: "#", active: false },
    { label: "Menu 3", url: "#", active: false },
    { label: "Menu 3", url: "#", active: false },
  ];

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const redirectHandler = (route: string) => {
    router.push(route);
    setisMenuOpened(false);
  };

  const logoutHandler = () => {
    cookie.remove();
    window.location.href = "/auth/login";
  };

  return (
    <AppBar position="fixed" sx={styles.mainContainer}>
      <Container sx={{ ...flexbox.rowCenterBetween }}>
        <Box {...flexbox.rowCenterBetween}>
          <Box {...flexbox.rowCenter} gap={3}>
            <Typography
              text="S"
              variant="body1"
              sx={{ fontSize: 24, fontWeight: 900 }}
            />
            <Box ml={2}>
              {menu.map((value, key) => (
                <Button
                  key={key}
                  theme="secondary"
                  onClick={() => redirectHandler(value.url)}
                  sx={{
                    fontSize: 12,
                    borderRadius: 2,
                    p: "4px 24px",
                    mr: 1,
                    color: palette.primary.light,
                    bgcolor: value.active
                      ? palette.complementary.dark4
                      : palette.complementary.dark2,
                    "&:hover": {
                      bgcolor: palette.complementary.dark4,
                    },
                  }}
                >
                  {value.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box {...flexbox.rowCenter} gap={3}>
            <Box sx={{ position: "relative" }}>
              <Button
                onClick={() => setisMenuOpened(!isMenuOpened)}
                theme="secondary"
                sx={{
                  fontSize: 12,
                  borderRadius: 2,
                  p: "4px 12px",
                  color: palette.primary.light,
                  bgcolor: palette.complementary.dark2,
                  "&:hover": {
                    bgcolor: palette.complementary.dark4,
                  },
                }}
              >
                Management
              </Button>
              {isMenuOpened && (
                <MenuManagement
                  flexbox={flexbox}
                  palette={palette}
                  redirectHandler={redirectHandler}
                />
              )}
            </Box>

            <Typography
              text={__SESSION?.fullname}
              variant="body1"
              sx={{ fontSize: 12, fontWeight: 400 }}
            />
            <Button
              theme="secondary"
              onClick={() => logoutHandler()}
              sx={{
                fontSize: 12,
                borderRadius: 2,
                p: "4px 12px",
                color: palette.primary.light,
                bgcolor: palette.complementary.dark2,
                ...flexbox.rowCenter,
                gap: 0.5,
                "&:hover": {
                  bgcolor: palette.complementary.dark4,
                },
              }}
            >
              <Logout sx={{ fontSize: 18 }} />
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
