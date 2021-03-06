import "aos/dist/aos.css";
import "../styles/globals.css";
import GlobalStyles from "./../styles/GlobalStyles";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import React, { useEffect, useState } from "react";
import Layout from "./_layout";
import AOS from "aos";

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === "undefined";
};

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );

  useEffect(() => {
    // inits animation library
    AOS.init();

    // inits AXE
    if (process.env.NODE_ENV !== "production" && !isServerSideRendered()) {
      import("react-dom").then((ReactDOM) => {
        import("@axe-core/react").then((axe) => {
          axe.default(React, ReactDOM, 1000, {});
        });
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
