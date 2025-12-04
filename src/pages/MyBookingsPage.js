// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { cancelBooking } from "../redux/ticketsSlice";

// const MyBookingsPage = () => {
//   const dispatch = useDispatch();
//   const bookings = useSelector((state) => state.tickets.bookings);

//   if (!bookings.length)
//     return <p style={{ textAlign: "center" }}>У вас пока нет бронирований.</p>;

//   return (
//     <div style={{ maxWidth: 600, margin: "30px auto" }}>
//       <h2 style={{ textAlign: "center" }}>🎟 Мои бронирования</h2>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {bookings.map((b) => (
//           <li
//             key={b.id}
//             style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10, borderRadius: 5 }}
//           >
//             <p><b>Фильм:</b> {b.movieTitle}</p>
//             <p><b>Имя:</b> {b.name}</p>
//             <p><b>Места:</b> {b.seats}</p>
//             <p><b>Зал:</b> {b.hall}</p>
//             <p><b>Тип места:</b> {b.placeType}</p>
//             <p><b>Телефон:</b> {b.phone}</p>
//             <p><b>Дата:</b> {b.date}</p>
//             <p><b>Создано:</b> {b.time}</p>
//             <button
//               onClick={() => dispatch(cancelBooking(b.id))}
//               style={{ background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: 4 }}
//             >
//               Отменить
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyBookingsPage;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBooking } from "../redux/bookingSlice";

const MyBookingsPage = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking.items);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("date");

  // Фильтр по имени
  const filtered = bookings.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));

  // Сортировка
  const sorted = [...filtered].sort((a, b) => {
    if (sortField === "name") return a.name.localeCompare(b.name);
    if (sortField === "seats") return a.seats - b.seats;
    if (sortField === "date") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  if (!bookings.length) return <p style={{ textAlign: "center" }}>У вас пока нет бронирований.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "30px auto" }}>
      <h2>🎟 Мои бронирования</h2>

      <input type="text" placeholder="Найти по имени" value={search} onChange={e => setSearch(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }} />

      <select value={sortField} onChange={e => setSortField(e.target.value)} style={{ width: "100%", padding: 8, marginBottom: 10 }}>
        <option value="date">Сортировать по дате</option>
        <option value="seats">Сортировать по количеству гостей</option>
        <option value="name">Сортировать по имени</option>
      </select>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {sorted.map(b => (
          <li key={b.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10, borderRadius: 5 }}>
            <p><b>Фильм:</b> {b.movieTitle}</p>
            <p><b>Имя:</b> {b.name}</p>
            <p><b>Места:</b> {b.seats}</p>
            <p><b>Зал:</b> {b.hall}</p>
            <p><b>Тип места:</b> {b.placeType}</p>
            <p><b>Телефон:</b> {b.phone}</p>
            <p><b>Дата:</b> {b.date}</p>
            <button onClick={() => dispatch(removeBooking(b.id))} style={{ background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: 4 }}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookingsPage;
