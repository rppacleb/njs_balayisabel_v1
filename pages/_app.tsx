import App, { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cookie } from "@/core/utils/cache/cookie";
import { isUndefined } from "@/core/utils/common";
import { ObjectType } from "@/core/types/common";
import { Provider } from "react-redux";
import { __LOCALDB } from "@/core/utils/database";
import NextNProgress from "nextjs-progressbar";
import Heads from "@/core/layouts/Heads";
import Layout from "@/core/layouts/index";
import Theme from "@/core/components/Theme/index";
import Maintenance from "@/core/layouts/Maintenance";
import reduxStore from "@/core/redux/store";
import "@/styles/main.css";

const __LOCALSESSION = cookie.get();

// Default App
const DEFApp = ({ Component, pageProps, data }: AppProps & { data: ObjectType }) => {
  const router = useRouter();
  const [prefetch, setPrefetch] = useState<boolean>();
  const isMaintenance = false;

  useEffect(() => {
    console.log(__LOCALSESSION);
    if (isUndefined(__LOCALSESSION) && router.pathname !== "/auth/login") {
      // window.location.href = "/auth/login";
      return;
    }

    if (!isUndefined(__LOCALSESSION) && router.pathname === "/auth/login") {
      // window.location.href = "/";
      return;
    }

    setPrefetch(true);
    __LOCALDB.__admin();
  }, []);

  return (
    <Provider store={reduxStore}>
      {isMaintenance ? (
        <Maintenance />
      ) : (
        <Theme>
          <NextNProgress color="#fff" />
          <Heads />
          {prefetch && (
            <Layout __LOCALSESSION={__LOCALSESSION}>
              <Component {...pageProps} data={data} __LOCALSESSION={__LOCALSESSION} />
            </Layout>
          )}
        </Theme>
      )}
    </Provider>
  );
};

DEFApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  let data = {}; // add custom data here
  return { ...ctx, data: data };
};

export default DEFApp;
