import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromSeenList } from "../store/movieSlice";
import style from "../styles/MovieCard.module.scss";
import Button from "./Button";

function MovieCardContent({ movie }) {
  return (
    <li>
      <section className={style.MovieCard__image}
        style={{
          backgroundImage: `url(${movie.Poster})`,
        }}
      ></section>
      <section className={style.MovieCard__info}>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </section>
    </li>
  );
}
function MovieCard({ movie, haveSeen }) {
  const dispatch = useDispatch();
  return (
    <>
      {haveSeen ? (
        <article className={style.MovieCard}>
          <MovieCardContent movie={movie} />
          <Button
            title="Remove"
            action={() => dispatch(removeFromSeenList(movie))}
          />
        </article>
      ) : (
        <Link to={"/movieinfo/" + movie.imdbID + "/" + movie.Title}>
          <article className={style.MovieCard}>
            <MovieCardContent movie={movie} />
          </article>
        </Link>
      )}
    </>
  );
}

export default MovieCard;
