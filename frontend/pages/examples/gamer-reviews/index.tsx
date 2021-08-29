import { GetReviewsQuery, useGetReviewsQuery } from "@graphql/codegen";
import GraphQLRequestClient from "@lib/clients/gql-client";
import { GetStaticProps, NextPage } from "next";
import { DehydratedState } from "react-query/types/hydration";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import ReviewCard from "@components/pages/examples/gamer-reviews/ReviewCard";

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
        <ReviewCard key={review?.id} review={review} />
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
