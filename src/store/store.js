import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import favoritesReducer from "./favoritesSlice";
import ticketsReducer from "./ticketsSlice";
import bookingReducer from "./bookingSlice"; // <- важно подключить

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  tickets: ticketsReducer,
  booking: bookingReducer, // <- добавляем
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
