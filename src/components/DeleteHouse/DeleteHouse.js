import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
// eslint-disable-next-line import/no-extraneous-dependencies
import { houseData } from '../../mockData';
import styles from './DeleteHouse.scss';
import { deleteHouse } from '../../Redux/Reducers/deleteHouseSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    image: '',
    appartment_fee: '',
    description: '',
  });

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteHouse(formData));
    setFormData({
      name: '',
      city: '',
      image: '',
      appartment_fee: '',
      description: '',
    });
  };

  return (
    <section className="DeleteHouseContainer">
      <div>
        { houseData.map((item) => (
          <div className="list-items" key={item.id}>
            <div className="houses-imgs">
              <img src={item.image} style={{ width: '70', height: '70' }} alt={item.name} />
            </div>
            <div className="deleteCont">
              <h1 className={styles.name}><Link to={`${item.id}`}>{item.name}</Link></h1>
              <hr />
              <p className="desription">{item.description}</p>
              <input className="submit" type="submit" value="Delete House" onSubmit={handleDelete} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/">
          <button type="button" aria-label="Go back" className="back-btn"><IoCaretBackOutline /></button>
        </Link>
      </div>

    </section>

  );
};

export default DeleteHouse;
