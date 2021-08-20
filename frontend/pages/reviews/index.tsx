import { GetReviewsQuery, useGetReviewsQuery } from "@graphql/codegen";
import GraphQLRequestClient from "@lib/clients/gql-client";
import { GetStaticProps, NextPage } from "next";
import { DehydratedState } from "react-query/types/hydration";
import Link from "next/link";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

const Reviews: NextPage = () => {
  const { isLoading, error, data } = useGetReviewsQuery<GetReviewsQuery, Error>(
    GraphQLRequestClient,
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
          <Link href={"/reviews/" + review?.id}>
            <a>Read more...</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useGetReviewsQuery.getKey(),
    useGetReviewsQuery.fetcher(GraphQLRequestClient)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Reviews;
