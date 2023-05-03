import { useDispatch } from "react-redux";
import { addToWatched, removeFromCurrentList } from "../store/movieSlice";

// Komponent för att lägga till "sedda" lista och ta bort från nuvarande lista
export const AddToWatchedButton = ({ movie }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToWatched(movie));
    dispatch(removeFromCurrentList(movie));
  };

  return <button onClick={handleClick}>Add to Watched</button>;
};

// Komponent för att länka till film info sida
export const MovieInfoButton = ({ movie }) => {
    console.log(movie);
  return (
    <button> Se info
     {/*  <Link to={"/movieinfo/" + movie.imdbID + "/" + movie.Title}>Movie Info</Link> */}
    </button>
  );
};