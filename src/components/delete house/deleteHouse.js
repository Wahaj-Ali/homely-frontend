import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styles from './deleteHouse.scss';
import { deleteHouse } from '../../Redux/Reducers/addHouseSlice';
import { fetchHouses } from '../../Redux/Reducers/houseSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const status = useSelector((state) => state.houses.status);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const handleDelete = (houseId) => {
    dispatch(deleteHouse(houseId))
      .then(() => {
        setSuccessMessage('House deleted successfully!');
        dispatch(fetchHouses());
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      })
      .catch((error) => {
        console.error('Error deleting house:', error);
      });
  };

  return (
    <section className="house-cont">
      <h2>ALL HOUSES</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="list-cont">
        {status === 'loading' && <div>Loading...</div>}
        {status === 'succeeded' && (
          <table className="stripped-table">
            <tbody>
              {houses.map((item) => (
                <tr key={item.id}>
                  <td className={styles.name}>
                    {item.name}
                    <input
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                      value="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/">
        <button type="button" aria-label="Go back" className="back-btn">
          <IoCaretBackOutline />
        </button>
      </Link>
    </section>
  );
};

export default DeleteHouse;
