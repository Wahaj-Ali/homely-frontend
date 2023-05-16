import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { createReservation } from '../../Redux/Reducers/reservationsSlice';
import { fetchCurrentUser } from '../../Redux/Reducers/authSlice';

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  const {
    id,
  } = useSelector((state) => state.auth);

  const house = useSelector((state) => state.houseDetail.house);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleCreateReservation = () => {
    const reservationData = {
      userId: id,
      houseId: house.id,
      reservationDate: '5/5/2023',
    };
    dispatch(createReservation(reservationData))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section>
      <div>
        <h2>
          Book your visit to
          {' '}
          {house ? house.name : 'Loading...'}
        </h2>
        <hr />
      </div>
      <div>
        <p>Please Select a date of your visit.</p>
        <div>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </div>
      </div>

      <button type="button" className="book-btn" onClick={handleCreateReservation}>
        Confrim Visit
      </button>
      <Link to={`/${house.id}`}>
        <button type="button" aria-label="Go back"><IoCaretBackOutline /></button>
      </Link>
    </section>
  );
};

export default Reservation;
