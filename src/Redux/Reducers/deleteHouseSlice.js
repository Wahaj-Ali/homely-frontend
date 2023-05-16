import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createHouse = createAsyncThunk('houses/create', async (formData) => {
  const response = await axios.post('http://localhost:4000/api/v1/houses', { house: formData });
  return response.data;
});

const addHouseSlice = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHouse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHouse.fulfilled, (state, action) => {
        state.houses.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createHouse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default addHouseSlice.reducer;


