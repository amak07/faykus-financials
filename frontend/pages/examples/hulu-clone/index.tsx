import Header from "@components/pages/examples/hulu-clone/Header";
import Head from "next/head";
import Nav from "@components/pages/examples/hulu-clone/Nav";
import Results, { Result } from "@components/pages/examples/hulu-clone/Results";
import resources from "utils/request";

function HuluClone({ results }: { results: Result[] }) {
  return (
    <>
      <style jsx global>
        {`
          body {
            color: rgb(209, 213, 219);
            background: #06202a;
          }
        `}
      </style>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="A hulu clone using tailwind css" />
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

export default HuluClone;
