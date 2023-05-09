import React from 'react';
import { Link } from 'react-router-dom';
import { ReservationsData } from '../../mockData';
import './Reservations.scss';

const Reservations = () => (
  <section>
    <div className="myReservationsContainer">
      {
        ReservationsData.map((item) => (
          <div className="list-items" key={item.id}>
            <h5 className="city"><Link to={`${item.id}`}>{item.city}</Link></h5>
            <p className="name">{item.name}</p>
            <p className="date">{item.date}</p>
            <button type="button" className="delete">Cancel Reservation</button>
          </div>
        ))
      }
    </div>
  </section>

);

export default Reservations;
