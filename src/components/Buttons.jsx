import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addMovie, addToWatched, removeFromCurrentList, removeFromWatched, setCurrentMovie } from "../store/movieSlice";

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
// Komponent för att ta bort från "sedda" listan och lägga tillbaka i movielist
export const RemoveFromWatchedButton = ({ movie }) => {
  const dispatch = useDispatch();
  const seenlist = useSelector((state) => state.seenList);

  const handleRemove = () => {
    dispatch(removeFromWatched(movie));
    dispatch(addMovie(movie));
    console.log(seenlist);
  };

  return <button onClick={handleRemove}>Remove from Watched</button>;
};

// Komponent för att länka till film info sida
export const MovieInfoButton = ({ movie, path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToMovie = () => {
    dispatch(setCurrentMovie(movie));
    path && navigate(path);
  }
  return (
    <button onClick={goToMovie} movie={movie}>More info</button>
  );
};