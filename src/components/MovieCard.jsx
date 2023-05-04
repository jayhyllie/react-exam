import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromSeenList } from "../store/movieSlice";
import { AddToWatchedButton, MovieInfoButton } from "./Buttons";
import style from "../styles/MovieCard.module.scss";
import Button from "./Button";

function MovieCardContent({ movie }) {
  return (
    <li>
      <section className={style.MovieCard__image}
        style={{
          backgroundImage: `url(${movie.poster_path})`,
        }}
      ></section>
      <section className={style.MovieCard__info}>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
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
          <section className={style.MovieCard__buttons}>
            <AddToWatchedButton movie={movie} />
            <MovieInfoButton movie={movie} />
          </section>
        </article>
      ) : (
        <Link to={"/movieinfo/" + movie.id + "/" + movie.title}>
          <article className={style.MovieCard}>
            <MovieCardContent movie={movie} />
            <section className={style.MovieCard__buttons}>
              <AddToWatchedButton movie={movie} />
              <MovieInfoButton movie={movie} />
            </section>
          </article>
        </Link>
      )}
    </>
  );
}

export default MovieCard;
