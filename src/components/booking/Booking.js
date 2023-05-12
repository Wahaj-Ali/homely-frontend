import React from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
// eslint-disable-next-line import/no-extraneous-dependencies
import DatePicker from 'react-multi-date-picker';
import './Booking.scss';
// import background from '../../images/house.jpg';
// import loadingGif from '../../images/loading.gif';
import { houseData } from '../../mockData';

const Booking = () => (
  <div className="myReservationPageContainer">

    <div className="bookingSelect">
      {houseData.map((item) => (
        <div className="reserveImage" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
          <h1 className="name">{item.name}</h1>
          <hr />
          <p className="description">{item.description}</p>
          <br />

          <form>
            <ul>
              <li>
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="Choose Start Date"
                />
              </li>
              <li>
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="Choose End Date"
                />
              </li>
            </ul>

            {/* <br /> */}

            <input className="submit" type="submit" value="Reserve House" />
          </form>
        </div>
      ))}
    </div>

    <br />
    <div>
      <Link to="/">
        <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
      </Link>
    </div>
  </div>
);
export default Booking;
