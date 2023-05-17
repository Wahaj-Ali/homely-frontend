import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../Redux/Reducers/reservationsSlice';
import { fetchHouseById } from '../../Redux/Reducers/houseDetailsSlice';
import './MyReservations.scss';

const ReservationList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.id);
  const reservations = useSelector((state) => state.reservations.reservations);
  const loading = useSelector((state) => state.reservations.loading);
  const error = useSelector((state) => state.reservations.error);
  const houses = useSelector((state) => state.houses.houses);

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    reservations.forEach((reservation) => {
      dispatch(fetchHouseById(reservation.house_id));
    });
  }, [dispatch, reservations]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const getHouseName = (houseId) => {
    const house = houses.find((h) => h.id === houseId);
    return house ? house.name : 'Loading...';
  };

  return (
    <div>
      <h2>Your Reservations</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id} className="reservation-details">
          <p>
            Visit Date:
            {' '}
            {reservation.reservation_date}
          </p>
          <p>
            House ID:
            {' '}
            {reservation.house_id}
          </p>
          <p>
            House Name:
            {' '}
            {getHouseName(reservation.house_id)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
