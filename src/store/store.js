import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import favoritesReducer from "./favoritesSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
