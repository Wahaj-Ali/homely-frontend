import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Houses.scss';

export const houseData = [
  {
    id: 1,
    name: 'House 1',
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Yellow Concrete House.',
  },
  {
    id: 2,
    name: 'House 2',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'White and Red Wooden House With Fence.',
  },
  {
    id: 3,
    name: 'House 3',
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Beautiful House in Australia.',
  },
];

export const Houses = () => (
  <section className={styles['doctor-list-section']}>
    <h2>List of Houses</h2>
    <div className="points">.........................</div>
    <ul className={styles['all-doctor-lists']}>
      {
        houseData.map((item) => (
          <li className="list-items" key={item.id}>
            <div className="doctors-imgs">
              <img src={item.image} style={{ width: '70', height: '70' }} alt={item.name} />
            </div>
            <h5 className={styles.name}><Link to={`${item.id}`}>{item.name}</Link></h5>
            <p className={styles.email}>{item.description}</p>
          </li>
        ))
      }
    </ul>
  </section>
);
