import React, { useState } from 'react';
import './SideBar.css';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import Reservations from '../Reservations/Reservations';

const SideBar = () => {
  const [style, setStyle] = useState('menu');
  const [menuStatus, setMenuStatus] = useState('open');

  const handleClick = () => {
    if (menuStatus === 'open') {
      setMenuStatus('close');
      setStyle('menu active');
    } else if (menuStatus === 'close') {
      setMenuStatus('open');
      setStyle('menu');
    }
  };

  const navLinks = [
    { url: '/houses', name: 'Houses' },
    { url: '/reserve', name: 'Reserve' },
    { url: '../Reservations/Reservations.js', name: 'My Reservations' },
    { url: '/add_house', name: 'Add House' },
    { url: '/delete_house', name: 'Delete House' },
  ];

  return (
    <div>
      <button type="button" onClick={handleClick}>
        menu
      </button>
      <div className={style}>
        <div className="logo">Homely</div>
        <ul>
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
        <div className="footer">
          <div className="social">
            <FaTwitter />
            <FaFacebookF />
            <TiSocialGooglePlus />
            <FaVine />
            <FaPinterestP />
          </div>
          <small>&copy; 2023 FEEL AT HOME</small>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
