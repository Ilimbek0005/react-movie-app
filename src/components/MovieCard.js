import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);

  // Проверяем, есть ли фильм в избранном
  const isFavorite = favorites.find(item => item.id === movie.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} width="200" />
      <h3>{movie.title}</h3>
      <p><b>Жанр:</b> {movie.genre.join(", ")}</p>
      <p><b>Рейтинг:</b> {movie.rating}</p>
      <button onClick={handleClick}>
        {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
}

export default MovieCard;
