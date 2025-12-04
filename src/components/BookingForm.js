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
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  // Автоподстановка первого фильма
  useEffect(() => {
    if (movies.length && !selectedMovie) setSelectedMovie(movies[0].title);
  }, [movies, selectedMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация
    if (!name.trim()) return alert("Введите имя");
    if (!selectedMovie) return alert("Выберите фильм");
    if (seats < 1) return alert("Количество мест ≥ 1");
    if (!date) return alert("Выберите дату и время");
    if (!phone.trim()) return alert("Введите телефон");

    const bookingData = {
      id: Date.now().toString(), // уникальный id
      name: name.trim(),
      movieTitle: selectedMovie,
      seats: Number(seats),
      hall,
      placeType,
      phone: phone.trim(),
      date,
      time: new Date().toLocaleString(),
    };

    dispatch(bookTicket(bookingData));
  };

  // Очистка формы после успешного бронирования
  useEffect(() => {
    if (success) {
      const t = setTimeout(() => {
        setName("");
        setSeats(1);
        setHall("Зал 1");
        setPlaceType("Стандарт");
        setPhone("");
        setDate("");
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
        {/* Выбор фильма */}
        <select
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        >
          {movies.map((m) => (
            <option key={m.id} value={m.title}>
              {m.title}
            </option>
          ))}
        </select>

        {/* Детали фильма */}
        {movieDetails && (
          <div style={{ marginBottom: 10 }}>
            <p><b>Год:</b> {movieDetails.year}</p>
            <p><b>Жанр:</b> {movieDetails.genre.join(", ")}</p>
            <p><b>Рейтинг:</b> {movieDetails.rating}</p>
            <p>{movieDetails.description}</p>
            <img src={movieDetails.poster} alt={movieDetails.title} style={{ width: 200 }} />
          </div>
        )}

        {/* Имя */}
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        {/* Количество гостей */}
        <input
          type="number"
          min="1"
          max="10"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        {/* Зал */}
        <select
          value={hall}
          onChange={(e) => setHall(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        >
          <option>Зал 1</option>
          <option>Зал 2</option>
          <option>Зал 3</option>
        </select>

        {/* Тип места */}
        <select
          value={placeType}
          onChange={(e) => setPlaceType(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        >
          <option>Стандарт</option>
          <option>VIP</option>
          <option>Эконом</option>
        </select>

        {/* Телефон */}
        <input
          type="text"
          placeholder="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        {/* Дата и время */}
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        {/* Кнопка */}
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 10, backgroundColor: "#007bff", color: "#fff", border: "none" }}
        >
          {loading ? "Отправка..." : "Забронировать"}
        </button>
      </form>

      {success && <p style={{ color: "green" }}>✅ Бронирование успешно!</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
    </div>
  );
};

export default BookingForm;
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addBooking } from "../redux/bookingSlice";

// const BookingForm = () => {
//   const dispatch = useDispatch();
//   const movies = useSelector(state => state.movies.movies || []);

//   const [selectedMovie, setSelectedMovie] = useState("");
//   const [name, setName] = useState("");
//   const [seats, setSeats] = useState(1);
//   const [hall, setHall] = useState("Зал 1");
//   const [placeType, setPlaceType] = useState("Стандарт");
//   const [phone, setPhone] = useState("");
//   const [date, setDate] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (movies.length && !selectedMovie) setSelectedMovie(movies[0].title);
//   }, [movies, selectedMovie]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     // Валидация
//     if (!name.trim()) return setError("Имя не должно быть пустым");
//     if (seats < 1) return setError("Количество гостей ≥ 1");
//     if (!date) return setError("Выберите дату");
//     if (!phone.trim()) return setError("Введите телефон");

//     const newBooking = {
//       id: Date.now(),
//       name: name.trim(),
//       movieTitle: selectedMovie,
//       seats,
//       hall,
//       placeType,
//       phone,
//       date,
//     };

//     dispatch(addBooking(newBooking));

//     // Очистка формы
//     setName("");
//     setSeats(1);
//     setHall("Зал 1");
//     setPlaceType("Стандарт");
//     setPhone("");
//     setDate("");
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "30px auto" }}>
//       <h2>🎟 Бронирование билета</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <select value={selectedMovie} onChange={e => setSelectedMovie(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
//           {movies.map(m => <option key={m.id} value={m.title}>{m.title}</option>)}
//         </select>

//         <input type="text" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }} />
//         <input type="number" min="1" value={seats} onChange={e => setSeats(Number(e.target.value))} style={{ width: "100%", padding: 8, marginBottom: 10 }} />
//         <select value={hall} onChange={e => setHall(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
//           <option>Зал 1</option>
//           <option>Зал 2</option>
//           <option>Зал 3</option>
//         </select>
//         <select value={placeType} onChange={e => setPlaceType(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
//           <option>Стандарт</option>
//           <option>VIP</option>
//           <option>Эконом</option>
//         </select>
//         <input type="text" placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }} />
//         <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }} />

//         <button type="submit" style={{ width: "100%", padding: 10, backgroundColor: "#007bff", color: "#fff", border: "none" }}>
//           Забронировать
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;
