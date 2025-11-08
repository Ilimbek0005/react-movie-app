import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookTicket, clearStatus } from "../redux/ticketsSlice";

const BookingForm = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies || []);
  const { loading, success, error } = useSelector((state) => state.tickets);

  const [selectedMovie, setSelectedMovie] = useState("");
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);
  const [hall, setHall] = useState("Зал 1");
  const [placeType, setPlaceType] = useState("Стандарт");

  useEffect(() => {
    if (movies.length && !selectedMovie) setSelectedMovie(movies[0].title);
  }, [movies, selectedMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !selectedMovie) return alert("Введите имя и выберите фильм");
    dispatch(
      bookTicket({
        name,
        movieTitle: selectedMovie,
        seats,
        hall,
        placeType,
        time: new Date().toLocaleString(),
      })
    );
  };

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => {
        setName("");
        setSeats(1);
        dispatch(clearStatus());
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [success, dispatch]);

  const movieDetails = movies.find((m) => m.title === selectedMovie);

  return (
    <div style={{ maxWidth: 600, margin: "30px auto" }}>
      <h2>🎟 Бронирование билета</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        >
          {movies.map((m) => (
            <option key={m.id} value={m.title}>{m.title}</option>
          ))}
        </select>

        {movieDetails && (
          <div style={{ marginBottom: 10 }}>
            <p><b>Год:</b> {movieDetails.year}</p>
            <p><b>Жанр:</b> {movieDetails.genre.join(", ")}</p>
            <p><b>Рейтинг:</b> {movieDetails.rating}</p>
            <p>{movieDetails.description}</p>
            <img src={movieDetails.poster} alt={movieDetails.title} style={{ width: 200 }} />
          </div>
        )}

        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <input
          type="number"
          min="1"
          max="10"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <select value={hall} onChange={(e) => setHall(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
          <option>Зал 1</option>
          <option>Зал 2</option>
          <option>Зал 3</option>
        </select>

        <select value={placeType} onChange={(e) => setPlaceType(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
          <option>Стандарт</option>
          <option>VIP</option>
          <option>Эконом</option>
        </select>

        <button type="submit" disabled={loading} style={{ width: "100%", padding: 10, backgroundColor: "#007bff", color: "#fff", border: "none" }}>
          {loading ? "Отправка..." : "Забронировать"}
        </button>
      </form>

      {success && <p style={{ color: "green" }}>✅ Бронирование успешно!</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
    </div>
  );
};

export default BookingForm;
