import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addToWatched, removeFromCurrentList } from "../store/movieSlice";

// Komponent för att lägga till "sedda" lista och ta bort från nuvarande lista
export const AddToWatchedButton = ({ movie, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addToWatched(movie));
    dispatch(removeFromCurrentList(movie));
    path && navigate(path);
  };

  return <button onClick={handleClick}>Add to Watched</button>;
};

// Komponent för att länka till film info sida
export const MovieInfoButton = ({ movie, path }) => {
  const navigate = useNavigate();
  const goToMovie = () => {
    path && navigate(path);
  }
  return (
    <button onClick={goToMovie} info={movie}>More info</button>
  );
};