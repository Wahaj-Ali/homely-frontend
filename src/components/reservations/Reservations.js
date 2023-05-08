// @import './../scss/config';

import React from 'react';
import { Link } from 'react-router-dom';
import { ReservationsData } from '../../mockData';

const Reservations = () => (
  <section>
    <div className="my-reservationsContainer">
      {
        ReservationsData.map((item) => (
          <div className="list-items" key={item.id}>
            <h5 className="city"><Link to={`${item.id}`}>{item.city}</Link></h5>
            <p className="date">{item.date}</p>
            <button type="button" className="locationButton">Location</button>
            <button type="button" className="reserveButton">Reserve Now</button>
          </div>
        ))
      }
    </div>
  </section>

);

export default Reservations;
