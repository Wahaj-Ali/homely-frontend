import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoCaretBackOutline } from 'react-icons/io5';
import { AiOutlineRightCircle, AiOutlineRight } from 'react-icons/ai';
import { fetchHouseById } from '../../Redux/Reducers/houseDetailsSlice';
import DatePicker from 'react-multi-date-picker';
import './Booking.scss';
import { bookingDetail } from '../../mockData';

const bookingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservationDetail.house);

  return (
  useEffect(() => {
    dispatch(fetchReservationById(id));
  }, [dispatch, id]);

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
};

HousesDetails.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;
export default bookingDetails;
