import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import houseReducer from './Reducers/houseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    houses: houseReducer,
  },
});

export default store;
