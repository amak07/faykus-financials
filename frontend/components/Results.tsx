import Thumbnail from "./Thumbnail";

const Results = ({ results }: { results: Result[] }) => {
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
    3xl:flex flex-wrap justify-center"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

export interface Result {
  id: number;
  overview: string;
  title: string;
  original_title: string;
  name: string;
  original_name: string;
  vote_average: number;
  vote_count: number;
  video: boolean;
  release_date: string;
  first_air_date: string;
  poster_path: string;
  popularity: number;
  media_type: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
}
