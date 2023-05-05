import { useSelector } from "react-redux";
import Headline from "../components/Headline";
import MovieCard from "../components/MovieCard";
import style from "../styles/Watched.module.scss";
function Watched() {
  const seenlist = useSelector((state) => state.seenList);
  return (
    <>
      <div className={style.watched}>
        <Headline title="Watched Movies" />
        <ul className={style.watched__list}>
          {seenlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} haveSeen={true} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Watched;
