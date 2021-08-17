// use this function to prefetch API data.
// to be used exclusively in getStaticProps for a NextPage.

import { Exact } from "@graphql/*";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const PrefetchClient = async (key: (string | Exact<{ [key: string]: never; }> | undefined)[], endpoint: string) => {
  const fetchData = async () => {
    const res = await fetch(endpoint);
    return await res.json();
  };
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(key, fetchData);
  return JSON.parse(JSON.stringify(dehydrate(queryClient))); // hacky. should not need to JSON-ized the queryClient but issue with react-query in getStaticProps persists.
}

export default PrefetchClient;