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
            <h1 className="name"><Link to={`${item.id}`}>{item.name}</Link></h1>
            <h3 className="date">{item.date}</h3>
            <p className="city">{item.city}</p>
            <li><button type="button" className="delete">Cancel Reservation</button></li>
          </div>
        ))
      }
    </div>
  </section>

);

export default Reservations;
