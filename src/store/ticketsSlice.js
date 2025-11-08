import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Имитация API
const fakeApi = {
  bookTicket: (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Date.now(), ...data });
      }, 500);
    }),
};

export const bookTicket = createAsyncThunk(
  "tickets/bookTicket",
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await fakeApi.bookTicket(bookingData);
      return response;
    } catch (err) {
      return rejectWithValue("Ошибка бронирования");
    }
  }
);

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    bookings: [], // все брони
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter((b) => b.id !== action.payload);
    },
    clearStatus: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.bookings.push(action.payload);
      })
      .addCase(bookTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { cancelBooking, clearStatus } = ticketsSlice.actions;
export default ticketsSlice.reducer;
