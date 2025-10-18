
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MoviesPage() {
  const movies = useSelector(state => state.movies.movies); // берем данные из Redux

  return (
    <div style={{ padding: '20px' }}>
      <h2>Список фильмов</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
