import React from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
// eslint-disable-next-line import/no-extraneous-dependencies
import DatePicker from 'react-multi-date-picker';
import './Booking.scss';
import { bookingDetail } from '../../mockData';

const bookingDetails = () => (
  <div className="myReservationPageContainer">

    <div className="bookingSelect">
      <div className="reserveImage" style={{ backgroundImage: `url(${bookingDetail.image})` }}>
        <h1 className="name">{bookingDetail.name}</h1>
        <hr />
        <p className="description">{bookingDetail.description}</p>
        <br />

        <form>
          <ul>
            <li>
              <DatePicker
                format="DD/MM/YYYY"
                placeholder="Choose Start Date"
              />
            </li>
          </ul>

          <input className="submit" type="submit" value="Reserve House" />
        </form>
      </div>
    </div>

    <br />
    <div>
      <Link to="/">
        <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
      </Link>
    </div>
  </div>
);
export default bookingDetails;
