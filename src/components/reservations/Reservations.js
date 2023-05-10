import React from 'react';
import { Link } from 'react-router-dom';
import { ReservationsData } from '../../mockData';
import './Reservations.scss';

const Reservations = () => (
  <section>
    <ul className="myReservationsContainer">
      {
        ReservationsData.map((item) => (
          <div className="list-items" key={item.id}>
            <li className="city"><Link to={`${item.id}`}>{item.city}</Link></li>
            <li className="name">{item.name}</li>
            <li className="date">{item.date}</li>
            <li><button type="button" className="delete">Cancel Reservation</button></li>
          </div>
        ))
      }
    </ul>
  </section>

);

export default Reservations;
