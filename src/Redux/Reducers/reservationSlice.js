// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const fetchReservationById = createAsyncThunk('houses/fetchReservationsById', async (id) => {
  const response = await axios.get(`http://localhost:4000/api/v1/reservations/${id}`);
  return response.data;
});

const reservationSlice = createSlice({
  name: 'house',
  initialState: { house: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservationById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservationById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.house = action.payload;
      })
      .addCase(fetchReservationById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
