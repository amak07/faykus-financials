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

  return (
    <div className="review-card">
      <div className="rating">{data?.review?.rating}</div>
      <h2>{data?.review?.title}</h2>
      <small>console list</small>
      <p>{data?.review?.body}</p>
    </div>
  );
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
