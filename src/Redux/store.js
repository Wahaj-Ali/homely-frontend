import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import housesReducer from './Reducers/houseSlice';
import houseReducer from './Reducers/houseDetailsSlice';
import signUpReducer from './Reducers/regSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: signUpReducer,
    houses: housesReducer,
    houseDetail: houseReducer,
  },
});

export default store;
