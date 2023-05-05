import axios from "axios";
import { createSlice, createAction } from "@reduxjs/toolkit";

const API_URL = "https://advanced-movie-search.p.rapidapi.com/discover/movie";
const API_KEY = "b030f6f236mshe4bcd1634bbce08p19d65bjsn7e28c74d7b09";
const API_HOST = "advanced-movie-search.p.rapidapi.com";

const initialState = {
  movieList: [],
  seenList: [],
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movieList.push(action.payload);
    },
    addToSeenList: (state, action) => {
      const movie = state.movieList.find(
        (movie) => movie.id === action.payload
      );
      state.seenList.push(movie);
      state.movieList = state.movieList.filter(
        (movie) => movie.id !== action.payload
      );
    },
    removeFromSeenList: (state, action) => {
      const movie = state.seenList.find((movie) => movie.id === action.payload);
      state.movieList.push(movie);
      state.seenList = state.seenList.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    addToWatched: (state, action) => {
      state.seenList.push(action.payload);
    },
    removeFromCurrentList: (state, action) => {
      state.movieList = state.movieList.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const {
  addMovie,
  addToSeenList,
  removeFromSeenList,
  setLoading,
  setError,
  setMovieList,
  addToWatched,
  removeFromCurrentList
} = movieSlice.actions;

export const fetchMovies = (genre) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    console.log(genre);
    const response = await axios.get(`${API_URL}?with_genres=${genre}&page=1`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      }
    });
    dispatch(setMovieList(response.data.results));
    console.log(response.data.results);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default movieSlice.reducer;
