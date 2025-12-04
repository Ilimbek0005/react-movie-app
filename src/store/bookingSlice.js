// import { createSlice } from "@reduxjs/toolkit";

// const bookingSlice = createSlice({
//   name: "booking",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addBooking: (state, action) => {
//       const exists = state.items.find(item => item.id === action.payload.id);
//       if (!exists) {
//         state.items.push(action.payload);
//       }
//     },
//     removeBooking: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//     clearBookings: (state) => {
//       state.items = [];
//     }
//   }
// });

// export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;
// export default bookingSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Загружаем данные из localStorage при старте
const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    items: savedBookings,
  },
  reducers: {
    addBooking: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.items));
    },
    removeBooking: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.items));
    },
    clearBookings: (state) => {
      state.items = [];
      localStorage.setItem("bookings", JSON.stringify(state.items));
    },
  },
});

export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
