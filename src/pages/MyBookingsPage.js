import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "../redux/ticketsSlice";

const MyBookingsPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.tickets.bookings);

  if (!bookings.length) return <p style={{ textAlign: "center" }}>У вас пока нет бронирований.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "30px auto" }}>
      <h2 style={{ textAlign: "center" }}>🎟 Мои бронирования</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {bookings.map((b) => (
          <li key={b.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10, borderRadius: 5 }}>
            <p><b>Фильм:</b> {b.movieTitle}</p>
            <p><b>Имя:</b> {b.name}</p>
            <p><b>Места:</b> {b.seats}</p>
            <p><b>Зал:</b> {b.hall}</p>
            <p><b>Тип места:</b> {b.placeType}</p>
            <p><b>Дата:</b> {b.time}</p>
            <button onClick={() => dispatch(cancelBooking(b.id))} style={{ background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: 4 }}>
              Отменить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookingsPage;
