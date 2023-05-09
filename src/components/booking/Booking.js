import React from 'react';
// import { AiOutlineRightCircle } from 'react-icons/ai';
import './Booking.scss';
import bgImage from '../../images/house.jpeg';

const Booking = () => (
  <div className="my-reservationPageContainer">
    {/* <img className="harmbugrer" src={harmburger} alt="harmbugger Menu Icon" /> */}
    <img className="bgImage" src={bgImage} alt="background house" />
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
    <button type="button" className="locationButton">Location</button>
    <button type="button" className="reserveButton">Reserve Now</button>
  </div>

);

export default Booking;
