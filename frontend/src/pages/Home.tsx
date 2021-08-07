import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import gql from "graphql-tag";
import { request } from "graphql-request";

const GET_REVIEWS = gql`
  query {
    reviews {
      id
      title
      body
      rating
    }
  }
`;

const useGQLQuery = (key: string, query: any, variables?: [], config?: {}) => {
  const endpoint = "http://localhost:1337/graphql";
  const fetchData = async () => request(endpoint, query, variables);
  return useQuery(key, fetchData, config);
};

export default function Home() {
  const { data, isLoading, error } = useGQLQuery("reviews", GET_REVIEWS);

  console.log("data", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.reviews?.map(
        (review: {
          id: number;
          rating: number;
          title: string;
          body: string;
        }) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>
            <small>console list</small>
            <p>{review.body.substr(0, 100)}...</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        )
      )}
    </div>
  );
}
