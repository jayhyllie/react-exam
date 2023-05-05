import { AddToWatchedButton, MovieInfoButton, RemoveFromWatchedButton } from "./Buttons";
import style from "../styles/MovieCard.module.scss";

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
        <p>Released: {movie.release_date}</p>
      </section>
    </li>
  );
}
function MovieCard({ movie, haveSeen }) {
  return (
    <>
      {haveSeen ? (
        <article className={style.MovieCard}>
          <MovieCardContent movie={movie} />
          <section className={style.MovieCard__buttons}>
            <RemoveFromWatchedButton movie={movie} />
            <MovieInfoButton movie={movie} path='/movieinfo'/>
          </section>
        </article>
      ) : (
        <article className={style.MovieCard}>
          <MovieCardContent movie={movie} />
          <section className={style.MovieCard__buttons}>
            <AddToWatchedButton movie={movie} path='/watched' />
            <MovieInfoButton movie={movie} path='/movieinfo'/>
          </section>
        </article>
      )}
    </>
  );
}

export default MovieCard;
