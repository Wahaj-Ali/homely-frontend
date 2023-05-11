import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await axios.post('http://localhost:4000/login', {
    user: { email, password },
  });

  if (response.ok) {
    const token = response.headers.get('Authorization');
    localStorage.setItem('token', token);
    return token;
  }
  throw new Error(response);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
