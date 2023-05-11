import React from 'react';
import './SideBar.css';
import {
  FaTwitter, FaFacebookF, FaVine, FaPinterestP,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/Reducers/authSlice';

const SideBar = () => {
  // const [style, setStyle] = useState('menu');
  // const [menuStatus, setMenuStatus] = useState('open');

  // const handleClick = () => {
  //   if (menuStatus === 'open') {
  //     setMenuStatus('close');
  //     setStyle('menu active');
  //   } else if (menuStatus === 'close') {
  //     setMenuStatus('open');
  //     setStyle('menu');
  //   }
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const handleLogout = async () => {
    dispatch(logoutUser());
    setTimeout(() => {
      navigate('/');
    }, 100);
  };

  const navLinks = [
    { url: '/', name: 'Houses' },
    token && { url: '/my_reservations', name: 'My Reservations' },
    { url: '/add_house', name: 'Add House' },
    { url: '/delete_house', name: 'Delete House' },
  ].filter(Boolean);

  return (
    <div>
      {/* <button type="button" onClick={handleClick}>
        Menu
      </button> */}
      <div className="menu">
        <div className="logo">Homely</div>
        <ul>
          {navLinks.map(({ url, name }) => (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
          {token ? (
            <li>
              <button type="button" onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Log In</Link>
            </li>
          )}
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
