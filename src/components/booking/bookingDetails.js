import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IoCaretBackOutline } from 'react-icons/io5';
// import { AiOutlineRightCircle, AiOutlineRight } from 'react-icons/ai';
import DatePicker from 'react-multi-date-picker';
import { fetchReservationById } from '../../Redux/Reducers/bookingDetailsSlice';
import './Booking.scss';

const BookingDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.bookingDetails.house);

  useEffect(() => {
    dispatch(fetchReservationById(id));
  }, [dispatch, id]);

  return (
    <div className="myReservationPageContainer">

      <div className="bookingSelect">
        <div className="reserveImage" style={{ backgroundImage: `url(${reservation.image})` }}>
          <h1 className="name">{reservation.name}</h1>
          <hr />
          <p className="description">{reservation.description}</p>
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

BookingDetails.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;
export default BookingDetails;
