// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const deleteHouse = createAsyncThunk('houses/create', async (formData) => {
  const response = await axios.post('http://localhost:4000/api/v1/houses', { house: formData });
  return response.data;
});

const deleteHouseSlice = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteHouse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteHouse.fulfilled, (state, action) => {
        state.houses.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteHouse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default deleteHouseSlice.reducer;
