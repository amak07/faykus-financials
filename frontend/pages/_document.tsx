import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="overflow-x-hidden">
      <Head>
        <meta
          name="description"
          content="Wealth management firm based in Austin, TX"
        />
        <meta property="og:site_name" content="Faykus Financial, LLC" />
        <meta property="og:url" content="https://faykusfinancial.com/" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="article" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
