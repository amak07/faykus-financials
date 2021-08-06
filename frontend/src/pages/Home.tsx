import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Home() {
  const { loading, error, data } = useFetch<
    { id: number; rating: number; title: string; body: string }[]
  >("http://localhost:1337/reviews");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data?.map(
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
