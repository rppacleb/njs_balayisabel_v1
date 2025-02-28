import { Box, Divider, useTheme } from "@mui/material";
import { CheckCircle as ICheckCircle } from "@mui/icons-material";
import { Typography } from "@/core/components/DataDisplay";
import { Container } from "@/core/components/Layout";
import { __LOCALDB } from "@/core/utils/database";
import { __TBL } from "@/core/utils/enum";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { flexbox } from "@/core/utils/helpers";
import Image from "next/image";

const Welcome = () => {
  const theme = useTheme();
  const router = useRouter();
  const { palette } = theme;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, []);

  return (
    <Container
      fullWidth
      fullContent
      sx={{
        container: {
          width: "100%",
          height: "100%",
        },
        content: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Box height="100%" width="40%" sx={{ background: palette.gradient.darkTogreen, position: "relative" }}>
        <Image src="/assets/img/bibb_logo_v1.png" fill alt="Google logo" style={{ objectFit: "cover" }} />
      </Box>
      <Box
        height="100%"
        width="60%"
        bgcolor={palette.background.default}
        color={palette.complementary.dark3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Container
          maxWidth={400}
          sx={{
            container: {
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            },
          }}
        >
          <Box {...flexbox.col} gap={3}>
            <ICheckCircle sx={{ color: palette.complementary.green1 }} />
            <Typography
              text="Success! You are being redirected to your dashboard."
              variant="h1"
              sx={{ fontSize: 24, fontWeight: 500, lineHeight: 1.5 }}
            />
            <Divider sx={{ bgcolor: palette.complementary.dark3 }} />
            <Typography text="Setting up your account. Please wait..." variant="h1" sx={{ fontSize: 12, lineHeight: 1.5 }} />
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Welcome;
