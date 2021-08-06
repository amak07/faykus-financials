import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function ReviewDetails() {
  const { id } = useParams<{ id: string }>();
  const {
    loading,
    error,
    data: review,
  } = useFetch<{ rating: number; title: string; body: string }>(
    "http://localhost:1337/reviews/" + id
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="review-card">
      <div className="rating">{review?.rating}</div>
      <h2>{review?.title}</h2>
      <small>console list</small>
      <p>{review?.body}</p>
    </div>
  );
}
