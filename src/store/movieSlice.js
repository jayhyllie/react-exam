import axios from "axios";
import { createSlice, createAction } from "@reduxjs/toolkit";

const API_URL = "https://movie-database-alternative.p.rapidapi.com/";
const API_KEY = "b030f6f236mshe4bcd1634bbce08p19d65bjsn7e28c74d7b09";
const API_HOST = "movie-database-alternative.p.rapidapi.com";

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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMovieList: (state, action) => {
      state.movieList = action.payload;
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
} = movieSlice.actions;

export const fetchMovies = (searchTerm) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${API_URL}?s=${searchTerm}`, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    dispatch(setMovieList(response.data.Search));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default movieSlice.reducer;
