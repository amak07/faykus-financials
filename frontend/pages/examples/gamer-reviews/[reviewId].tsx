import {
  GetReviewQuery,
  useGetReviewQuery,
  useGetReviewsQuery,
} from "@graphql/codegen";
import GraphQLRequestClient from "@lib/clients/gql-client";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import { DehydratedState } from "react-query/types/hydration";
import { dehydrate } from "react-query/hydration";
import { QueryClient } from "react-query";
import ReviewCard from "@components/pages/examples/gamer-reviews/ReviewCard";

const ReviewDetails: NextPage = () => {
  const { query } = useRouter();

  const { isLoading, error, data } = useGetReviewQuery<GetReviewQuery, Error>(
    GraphQLRequestClient,
    {
      id: query?.reviewId as string,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ReviewCard review={data?.review} />;
};

export const getStaticPaths = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useGetReviewsQuery.getKey(),
    useGetReviewsQuery.fetcher(GraphQLRequestClient)
  );

  const data: { reviews: [] } | undefined = queryClient.getQueryData(
    useGetReviewsQuery.getKey()
  );

  return {
    fallback: false,
    paths: data?.reviews?.map((review: { id: string }) => ({
      params: { reviewId: review?.id },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const reviewId = context.params?.reviewId as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useGetReviewQuery.getKey({ id: reviewId }),
    useGetReviewQuery.fetcher(GraphQLRequestClient, {
      id: reviewId,
    })
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default ReviewDetails;
