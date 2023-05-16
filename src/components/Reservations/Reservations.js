import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ReservationsData } from '../../mockData';
import './Reservations.scss';
import { fetchReservations } from '../../Redux/Reducers/reservationsSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const status = useSelector((state) => state.reservations.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations());
    }
  }, [dispatch, status]);

  return (
    <section>
      <div className="myReservationsContainer">
        {
        reservations.map((item) => (
          <div className="list-items" key={item.id}>
            <h1 className="name"><Link to={`${item.id}`}>{item.name}</Link></h1>

            <div className="date">
              <p className="startDate">
                {item.startDate}
              </p>
              <p className="endDate">
                -
                {item.endDate}
              </p>
            </div>
            <p className="city">{item.city}</p>
            <li><button type="button" className="delete">Cancel Reservation</button></li>
          </div>
        ))
      }
      </div>
    </section>

  );
};

export default Reservations;
