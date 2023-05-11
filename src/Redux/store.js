import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/loginSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
