import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to create a new reservation
export const createReservation = createAsyncThunk(
  'reservations/createReservation',
  async ({ userId, houseId, reservationDate }) => {
    try {
      const response = await axios.post(`http://localhost:4000/api/v1/users/${userId}/reservations`, {
        user_id: userId,
        house_id: houseId,
        reservation_date: reservationDate,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reservations.push(action.payload);
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
