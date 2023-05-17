import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styles from './deleteHouse.scss';
import { fetchHouses, deleteHouse } from '../../Redux/Reducers/deleteHouseSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const status = useSelector((state) => state.houses.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHouses());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(deleteHouse());
    }
  }, [dispatch, status]);

  return (
    <section className="house-cont">
      <h2>ADDED HOUSES</h2>
      <h3>My house collections</h3>
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
                      onClick={() => deleteHouse(item.id)}
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
