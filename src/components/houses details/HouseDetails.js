import React from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { housedetail } from '../../mockData';
import icon from '../../images/icon.png';
import './HouseDetails.scss';

const HousesDetails = () => (
  <section className="details-sec">
    <div className="detail-container">
      <div className="image">
        <img src={housedetail.image} alt={housedetail.name} />
      </div>
      <div className="details">
        <h5 className="name">{housedetail.name}</h5>
        <div className="ulIcon">
          <ul>
            <li className="first">
              <p>City: </p>
              <p>{housedetail.city}</p>
            </li>
            <li className="first">
              <p>State: </p>
              <p>{housedetail.state}</p>
            </li>
            <li className="first">
              <p>Price:</p>
              <p>{housedetail.country}</p>
            </li>
          </ul>
          <div className="iconColor">
            <img src={icon} alt="icon" />
          </div>
          <Link to="/booking">
            <button type="button" aria-label="Go back" className="reserve-btn">
              Book House
              <AiOutlineRightCircle />
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Link to="/">
      <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
    </Link>
  </section>
);

export default HousesDetails;
