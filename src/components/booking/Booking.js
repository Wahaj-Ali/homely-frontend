import React from 'react';
// import { AiOutlineRightCircle } from 'react-icons/ai';
import './Booking.scss';
import background from '../../images/house.jpeg';

const Booking = () => (
  <div
    className="myReservationPageContainer"
    style={{
      backgroundImage: `url(${background})`,
      // opacity: '0.2',
      greyscale: '0.9',
    }}
  >
    <h1>
      RESERVE FOR YOURSELF AND FAMILY A BEAUTIFUL HOME
    </h1>
    <hr />
    <p className="reservationPageDescription">
      Nestled among the trees, this beautiful house boasts charming stonework and elegant
      architecture.The spacious interior is flooded with natural light, highlighting the
      luxurious finishes and modern amenities. Outside, a lush garden and serene pond
      create a peaceful oasis.
    </p>

    <div className="buttonContainer">
      <button type="button" className="locationButton">Location</button>
      <button type="button" className="reserveButton">Reserve Now</button>
    </div>

  </div>

);

export default Booking;
