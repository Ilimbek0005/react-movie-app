import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, removeBooking } from "../store/bookingSlice";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  // --- Избранное ---
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(item => item.id === movie.id);

  // --- Бронирование ---
  const bookings = useSelector(state => state.booking.items);
  const isBooked = bookings.some(item => item.id === movie.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const handleBooking = () => {
    if (isBooked) {
      dispatch(removeBooking(movie));
    } else {
      dispatch(addBooking(movie));
    }
  };

  return (
    <div className="movie-card" style={{ border: "1px solid #ccc", padding: 10, borderRadius: 10, margin: 10, textAlign: "center", width: 220 }}>
      <img src={movie.poster} alt={movie.title} width="200" style={{ borderRadius: 10 }} />
      <h3>{movie.title}</h3>
      <p><b>Жанр:</b> {movie.genre.join(", ")}</p>
      <p><b>Рейтинг:</b> {movie.rating}</p>

      <button onClick={handleFavorite} style={{ marginRight: 5 }}>
        {isFavorite ? "💔 Удалить из избранного" : "❤️ В избранное"}
      </button>

      <button onClick={handleBooking}>
        {isBooked ? "❌ Отменить бронь" : "🎟️ Забронировать"}
      </button>
    </div>
  );
}

export default MovieCard;
