// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Detail() {
//   const { id } = useParams();
//   const movie = useSelector(state =>
//     state.movies.movies.find(m => m.id === parseInt(id))
//   );

//   if (!movie) return <p>Фильм не найден...</p>;

//   return (
//     <div style={{ padding: '20px' }}>
//       <Link to="/movies">← Назад к списку фильмов</Link>
//       <h2>{movie.title} ({movie.year})</h2>
//       <img src={movie.poster} alt={movie.title} width="200" />
//       <p>{movie.description}</p>
//       <p><b>Жанры:</b> {movie.genre.join(', ')}</p>
//       <p><b>Продолжительность:</b> {movie.duration}</p>
//       <p><b>Рейтинг:</b> {movie.rating}</p>
//     </div>
//   );
// }

// export default Detail;
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
