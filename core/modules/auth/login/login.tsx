import { DispatchType, RTKStateType, useAppDispatch } from "@/core/redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { shallowEqual, useSelector } from "react-redux";
import { Box, Stack, useTheme } from "@mui/material";
import { Typography } from "@/core/components/DataDisplay";
import { Container } from "@/core/components/Layout";
import { Button } from "@/core/components/Inputs";
import { Formik, Form, Field } from "formik";
import { __LOCALDB } from "@/core/utils/database";
import { __TBL } from "@/core/utils/enum";
import { MailOutline as IMailOutline, LockOutlined as IlockOutlined } from "@mui/icons-material";
import TextField from "@/core/components/Inputs/TextField";
import * as Yup from "yup";
import { isUndefined } from "@/core/utils/common";
import { useState } from "react";
import { cookie } from "@/core/utils/cache/cookie";
import { useRouter } from "next/router";
import { LocalSessionType, ObjectType } from "@/core/types/common";
import Image from "next/image";

const app_state_selector = createSelector(
  (state: RTKStateType) => state?.app,
  (state) => state
);

const Login = ({ __LOCALSESSION }: LocalSessionType) => {
  const dispatch: DispatchType = useAppDispatch();
  const app_state = useSelector(app_state_selector, shallowEqual);
  const [verificationMsg, setVerificationMsg] = useState({
    stat: false,
    msg: "",
  });
  const theme = useTheme();
  const { palette } = theme;
  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const submitHandler = async (values: ObjectType) => {
    const account = await __LOCALDB.read(__TBL.USERS, "get", values.email);
    if (isUndefined(account)) return setVerificationMsg({ stat: false, msg: "Account does not exist" });
    if (account.password !== values.password)
      return setVerificationMsg({
        stat: false,
        msg: "Account credentials mismatched",
      });
    cookie.set("hms_app_session", JSON.stringify(account));
    router.push("/auth/welcome");
  };

  const responseHandler = async (values: ObjectType) => {
    if (values.error) return;
    const account = {
      fullname: values?.profileObj?.name,
      email: values?.profileObj?.email,
    };

    cookie.set("hms_app_session", JSON.stringify(account));
    router.push("/auth/welcome");
  };

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
          maxWidth={320}
          sx={{
            container: {
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            },
          }}
        >
          <Box>
            <Typography
              text="Sign in with your Balay Isabel credentials"
              variant="h2"
              sx={{ fontSize: 14, fontWeight: 400, mb: 2 }}
            />
            <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema} onSubmit={submitHandler}>
              {({ isSubmitting }) => (
                <Form>
                  <Stack spacing={2}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      name="email"
                      size="small"
                      label="Email"
                      fullWidth
                      adornment={{ position: "start", Render: IMailOutline }}
                    />
                    <Field
                      as={TextField}
                      variant="outlined"
                      size="small"
                      type="password"
                      name="password"
                      label="Password"
                      fullWidth
                      adornment={{ position: "start", Render: IlockOutlined }}
                    />
                    <Typography text={verificationMsg.msg} variant="h2" sx={{ fontSize: 12, color: "#CB3837" }} />
                    <Box pt={2} width="100%">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        theme="primary"
                        sx={{
                          fontSize: 14,
                          borderRadius: 2,
                          px: "32px",
                          width: "100%",
                        }}
                      >
                        Login my Credentials
                      </Button>
                    </Box>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Login;
