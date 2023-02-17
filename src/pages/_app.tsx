import type { AppProps } from "next/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utility/createEmotionCache";
import { FC, useEffect } from "react";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@/theme";
import { ReactNode } from "react";
import { NextPage } from "next";

type MyAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  useEffect(() => {}, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider
        theme={createTheme({
          mode: "light",
        })}
      >
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
