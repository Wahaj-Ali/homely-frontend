import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../Redux/Reducers/reservationsSlice';
import './MyReservations.scss';

const ReservationList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id);
  const reservations = useSelector((state) => state.reservations.reservations);
  const loading = useSelector((state) => state.reservations.loading);
  const error = useSelector((state) => state.reservations.error);
  const house = useSelector((state) => state.houseDetail.house);

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Your Reservations</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id} className="reservation-details">
          <p>
            Visit Date:
            {reservation.reservation_date}
          </p>
          <p>
            House Name:
            {house.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
