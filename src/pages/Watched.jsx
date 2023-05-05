import { useSelector } from 'react-redux';
import Headline from '../components/Headline';
import MovieCard from '../components/MovieCard';
import style from '../styles/Watched.module.scss';
function Watched() {
    const seenlist = useSelector((state) => state.seenList);
    console.log(seenlist);
    return (
        <>
        <Headline title='Watched Movies' />
        <div className={style.watched}>
            {seenlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} haveSeen={true} />
            ))}
        </div>
        </>
    )
}

export default Watched;
