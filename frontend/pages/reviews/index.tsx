import { GetReviewsQuery, useGetReviewsQuery } from "@graphql/codegen";
import graphqlRequestClient from "@lib/gql-client";

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
