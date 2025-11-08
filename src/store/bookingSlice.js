import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    items: [],
  },
  reducers: {
    addBooking: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeBooking: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearBookings: (state) => {
      state.items = [];
    }
  }
});

export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
