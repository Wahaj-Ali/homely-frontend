import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import housesReducer from './Reducers/houseSlice';
import houseReducer from './Reducers/houseDetailsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    houses: housesReducer,
    houseDetail: houseReducer,
  },
});

export default store;
