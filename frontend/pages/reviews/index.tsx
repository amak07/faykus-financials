import { GetReviewsQuery, useGetReviewsQuery } from "@graphql/codegen";
import GraphQLRequestClient from "@lib/clients/gql-client";
import PrefetchClient from "@lib/clients/prefetch-client";
import { GetStaticProps, NextPage } from "next";
import { DehydratedState } from "react-query/types/hydration";

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
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const dehydratedState = await PrefetchClient(
    useGetReviewsQuery.getKey(),
    process.env.REVIEWS_ENDPOINT as string
  );

  return {
    props: {
      dehydratedState,
    },
  };
};

export default Reviews;
