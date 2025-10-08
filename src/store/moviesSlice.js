import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../data/movies.json';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: moviesData,
  },
  reducers: {

  }
});

// export const { selectMovie, clearSelection } = moviesSlice.actions;
export default moviesSlice.reducer;
