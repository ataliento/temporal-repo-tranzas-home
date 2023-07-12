import { ErrorBoundary, StyleSystemProvider } from "@architecture-it/stylesystem";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <meta charSet="utf-8" />
        <title>Home Transaccional</title>
        <meta content="Home Transaccional" name="Andreani Transaccional" />
        <link href="/favicon.png" rel="icon" type="image/x-icon" />
      </Head>
      <StyleSystemProvider>
        <CssBaseline />
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </StyleSystemProvider>
    </>
  );
}
