import Head from "next/head";
import Welcome from "@components/pages/faykus-landing/Welcome";
import Services from "@components/pages/faykus-landing/Services";
import Blue from "@components/pages/faykus-landing/Blue";

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

      <div className="py-16">
        <Welcome />
      </div>

      <Services />

      <div className="pb-64">
        <Blue />
      </div>
    </>
  );
}

export default HomePage;
