import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHouseById = createAsyncThunk('houses/fetchHouseById', async (id) => {
  const response = await axios.get(`http://localhost:4000/api/v1/houses/${id}`);
  return response.data;
});

const houseSlice = createSlice({
  name: 'house',
  initialState: { house: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouseById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHouseById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.house = action.payload;
      })
      .addCase(fetchHouseById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default houseSlice.reducer;
