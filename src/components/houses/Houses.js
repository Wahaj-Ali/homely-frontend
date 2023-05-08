import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
  {
    id: 4,
    name: 'House 4',
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Beautiful House in Australia. One of the best places you can find here in Australia.',
  },
];

export const Houses = () => (
  <section>
    <h2>LATEST HOUSES</h2>
    <h3 className="email">Please select your Dream House</h3>
    <div className="points">.........................</div>
    <Swiper
      className="house-list"
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
    >
      {
        houseData.map((item) => (
          <SwiperSlide className="list-items" key={item.id}>
            <div className="houses-imgs">
              <img src={item.image} style={{ width: '70', height: '70' }} alt={item.name} />
            </div>
            <h5 className={styles.name}><Link to={`${item.id}`}>{item.name}</Link></h5>
            <div className="points">....................</div>
            <p className="email">{item.description}</p>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>
);
