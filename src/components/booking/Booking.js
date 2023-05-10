import React from 'react';
import './Booking.scss';
import background from '../../images/house.jpeg';

const Booking = () => (
  <div
    className="myReservationPageContainer"
    style={{
      backgroundImage: `url(${background})`,
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

    <>
      {status === 'succeeded' ? (
        <form onSubmit={handleSubmit}>
          <DatePicker
            value={startDate}
            onChange={setStartDate}
            format="DD/MM/YYYY"
            placeholder="Choose Start Date"
          />

          <DatePicker
            value={endDate}
            onChange={setEndDate}
            format="DD/MM/YYYY"
            placeholder="Choose End Date"
          />

          <select value={selectedValue} onChange={handleSelectChange}>
            {packages.map((item) => (
              <option key={item.id} value={item.id}>
                {item.city}
                {item.date}
              </option>
            ))}
          </select>

          <br />

          <input type="submit" value="Submit" />
        </form>
      ) : <img src={loadingGif} alt="loading" /> }

      <Link to="/">
        Go Back
      </Link>
    </>
  </div>

);


export default Booking;
