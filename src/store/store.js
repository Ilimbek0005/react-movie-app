// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import moviesReducer from "./moviesSlice";
// import favoritesReducer from "./favoritesSlice";
// import ticketsReducer from "./ticketsSlice";
// import bookingReducer from "./bookingSlice"; // <- ОБЯЗАТЕЛЬНО импортировать

// const rootReducer = combineReducers({
//   movies: moviesReducer,
//   favorites: favoritesReducer,
//   tickets: ticketsReducer,
//   booking: bookingReducer, // <- добавить сюда
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import favoritesReducer from "./favoritesSlice";
import bookingReducer from "./bookingSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  booking: bookingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

