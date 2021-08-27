import Header from "@components/Header";
import Head from "next/head";
import Nav from "@components/Nav";
import Results, { Result } from "@components/Results";
import resources from "utils/request";

function HomePage({ results }: { results: Result[] }) {
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

      <Header />

      <Nav />

      <Results results={results} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      // @ts-ignore
      resources[genre]?.url || resources.fetchTrending.url
    }`
  );
  const data = await request.json();
  return {
    props: {
      results: data.results,
    },
  };
}

export default HomePage;
