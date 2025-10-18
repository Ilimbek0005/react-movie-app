import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/favoritesSlice";

function FavoritesPage() {
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Избранные фильмы</h2>
      {favorites.length === 0 ? (
        <p>Вы ещё не добавили фильмы в избранное.</p>
      ) : (
        <div className="favorites-container">
          {favorites.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} width="200" />
              <h3>{movie.title}</h3>
              <button onClick={() => dispatch(removeFromFavorites(movie))}>
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
