import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "../styles/MovieInfoPage.module.scss";
import { updateTitle } from "../store/movieSlice";

function MovieInfoPage() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.currentMovie);
  const [title, setTitle] = useState(movie.title);

  function handleObject() {
    dispatch(updateTitle(title));
  }

  return (
    <>
      <main className={style.moviePage}>
        <figure
          style={{ backgroundImage: `url(${movie.backdrop_path})` }}
          className={style.moviePage__image}
        ></figure>
        <section className={style.moviePage__section}>
          <h2 className={style.moviePage__title}>{movie.title}</h2>
          <p className={style.moviePage__description}>{movie.overview}</p>
          <section className={style.moviePage__info}>
            <span>Language: {movie.original_language}</span>
            <span>Release date: {movie.release_date}</span>
            <span>Score: {movie.vote_average}</span>
          </section>
        </section>
        <form className={style.moviePage__form}>
          <input placeholder="Change the title..." type="text" onChange={(e) => setTitle(e.target.value)} className={style.moviePage__input}></input>
          <button type="submit" onClick={handleObject}>
            Update
          </button>
        </form>
      </main>
    </>
  );
}

export default MovieInfoPage;
