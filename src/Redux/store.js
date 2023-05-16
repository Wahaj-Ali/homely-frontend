// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions
import deleteHouseReducer from './Reducers/deleteHouseSlice';
// eslint-disable-next-line import/extensions
import reservationReducer from './Reducers/reservationSlice';
// eslint-disable-next-line import/extensions
import reservationsReducer from './Reducers/reservationsSlice';

const store = configureStore({
  reducer: {
    deleteHouse: deleteHouseReducer,
    reservation: reservationReducer,
    reservations: reservationsReducer,
  },
});

export default store;
