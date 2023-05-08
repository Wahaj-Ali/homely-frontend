import { configureStore } from '@reduxjs/toolkit';
import '../components/myReservations/myReservations'

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});
export default store;
