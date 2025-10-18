import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const exists = state.items.find(item => item.id === movie.id);
      if (!exists) {
        state.items.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
