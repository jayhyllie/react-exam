import { useEffect, useState } from 'react';
import style from '../styles/Selector.module.scss';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';

function Selector() {
    const [selected, setSelected] = useState("action");
    const dispatch = useDispatch();

    function handleChange(e) {
        setSelected(e.target.value)
    }
  return (
    <div className={style.Selector}>
      <label htmlFor="movie-genre">Choose your genre:</label>
      <select name="movie-genre" id="movie-genre" onChange={handleChange}>
        <option value="action">Action</option>
        <option value="romance">Romance</option>
        <option value="drama">Drama</option>
        <option value="science fiction">Sci-Fi</option>
        <option value="thriller">Thriller</option>
        <option value="horror">Horror</option>
      </select>
    </div>
  );
}

export default Selector;
