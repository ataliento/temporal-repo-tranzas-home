import { ErrorBoundary, StyleSystemProvider } from "@architecture-it/stylesystem";
import { CssBaseline } from "@mui/material";
import App, { type AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleSystemProvider>
      <CssBaseline />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </StyleSystemProvider>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps: any = await App.getInitialProps(ctx);

  return appProps;
};
export default MyApp;
