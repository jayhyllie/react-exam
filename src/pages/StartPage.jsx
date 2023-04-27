import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/movieSlice";
import MovieCard from "../components/MovieCard";

function StartPage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies.movieList);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMovies("Avengers"));
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
