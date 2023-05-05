import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../store/movieSlice";
import MovieCard from "../components/MovieCard";
import style from '../styles/StartPage.module.scss';

function StartPage() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [selected, setSelected] = useState("");

  if (loading) {
    return <div className={style.loading}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <h1>Movies</h1>
      <div className={style.Selector}>
        <label htmlFor="movie-genre" className={style.Selector__label}>Choose your genre:</label>
        <select className={style.Selector__select} name="movie-genre" id="movie-genre" value={selected} onChange={e => dispatch(fetchMovies(e.target.value))}>
          <option value="choose">Choose...</option>
          <option value="action">Action</option>
          <option value="romance">Romance</option>
          <option value="drama">Drama</option>
          <option value="science_fiction">Sci-Fi</option>
          <option value="thriller">Thriller</option>
          <option value="horror">Horror</option>
        </select>
      </div>
      <ul className={style.MovieList}>
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} haveSeen={false} />
        ))}
      </ul>
    </main>
  );
}

export default StartPage;
