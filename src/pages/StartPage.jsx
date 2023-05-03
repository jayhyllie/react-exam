import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/movieSlice";
import MovieCard from "../components/MovieCard";

function StartPage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchMovies("AVENGERS"));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <h1>Movies</h1>
      <ul>
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} haveSeen={false} />
        ))}
      </ul>
    </main>
  );
}

export default StartPage;
