import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
