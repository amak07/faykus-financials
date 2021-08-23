import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>Faykus Financial, LLC</title>
        <meta
          name="description"
          content="Wealth management firm based in Austin, TX"
        />
        <meta property="og:site_name" content="Faykus Financial, LLC" />
        <meta property="og:url" content="https://faykusfinancial.com/" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="article" />
      </Head>
      <h1>The Home Page</h1>
    </>
  );
}

export default HomePage;
