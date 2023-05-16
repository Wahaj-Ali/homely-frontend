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
import { houseData } from '../../mockData';

const Houses = () => (
  <section className="house-sec">
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

export default Houses;
