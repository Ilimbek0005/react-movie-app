import React, { useEffect, useState } from "react";
import './PostsList.css';
import MovieCard from "./MovieCard";
import moviesData from "../data/movies.json"; // <- твой JSON с фильмами

function PostsList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData); // просто загружаем локальные фильмы
  }, []);

  return (
    <div className="posts-list">
      <h2>Популярные фильмы</h2>
      <div className="posts-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} /> // <- используем MovieCard с кнопкой
        ))}
      </div>
    </div>
  );
}

export default PostsList;
