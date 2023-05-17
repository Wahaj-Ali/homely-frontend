import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import housesReducer from './Reducers/houseSlice';
import houseReducer from './Reducers/houseDetailsSlice';
import signUpReducer from './Reducers/regSlice';
import addHouseReducer from './Reducers/addHouseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: signUpReducer,
    houses: housesReducer,
    houseDetail: houseReducer,
    addHouse: addHouseReducer,
  },
});

export default store;
