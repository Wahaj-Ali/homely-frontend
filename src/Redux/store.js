// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions
import deleteHouseReducer from './Reducers/deleteHouseSlice';

const store = configureStore({
  reducer: {
    deleteHouse: deleteHouseReducer,
  },
});

export default store;
