import { GetReviewsQuery, useGetReviewsQuery } from "@graphql/codegen";
import graphqlRequestClient from "@lib/gql-client";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { DehydratedState } from "react-query/types/hydration";

export default function Reviews() {
  const { isLoading, error, data } = useGetReviewsQuery<GetReviewsQuery, Error>(
    graphqlRequestClient,
    {}
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.reviews?.map((review) => (
        <div key={review?.id} className="review-card">
          <div className="rating">{review?.rating}</div>
          <h2>{review?.title}</h2>
          <small>console list</small>
          <p>{review?.body.substr(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(useGetReviewsQuery.getKey(), () =>
    useGetReviewsQuery.fetcher(graphqlRequestClient)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
