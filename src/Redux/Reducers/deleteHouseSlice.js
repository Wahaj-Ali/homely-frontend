import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHouses = createAsyncThunk('houses/fetchHouses', async () => {
  const response = await axios.get('http://localhost:4000/api/v1/houses');
  return response.data;
});

const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1/houses',
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers if required
  },
});

// Async thunk action for deleting an item
export const deleteHouse = createAsyncThunk(
  'houses/deleteHouse',
  async (id) => {
    try {
      // Make the delete request using Axios
      await api.delete(`/houses/${id}`);
      return id; // Return the item ID on success
    } catch (error) {
      // Handle any errors
      console.error('Error deleting item:', error);
      throw error;
    }
  },
);

const deleteHouseSlice = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.houses = action.payload;
      })
      .addCase(deleteHouse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.houses = action.payload;
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default deleteHouseSlice.reducer;
