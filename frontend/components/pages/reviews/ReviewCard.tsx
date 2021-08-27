import { Maybe } from "graphql/jsutils/Maybe";
import Link from "next/link";
import styles from "./ReviewCard.module.css";

function ReviewCard({
  review,
}: {
  review: Maybe<{
    __typename?: "Review" | undefined;
    id: string;
    title: string;
    body: string;
    rating: number;
  }>;
}) {
  return (
    <div key={review?.id} className={styles.rc}>
      <div className={styles.rating}>{review?.rating}</div>
      <h2>{review?.title}</h2>
      <p>{review?.body.substr(0, 100)}...</p>
      <Link href={"/reviews/" + review?.id}>
        <a>Read more...</a>
      </Link>
    </div>
  );
}

export default ReviewCard;
