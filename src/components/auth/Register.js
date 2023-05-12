import React, { useState } from 'react';
import { FaUser, FaRegUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../Redux/Reducers/regSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({
      email,
      fullName,
      password,
    }));
  };

  return (
    <section className="login-register">
      <div className="loginIcon"><FaUser /></div>
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <h4>Register</h4>
        <div className="form-group">
          <span className="icon"><HiOutlineMailOpen /></span>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <span className="icon"><FaRegUser /></span>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        {/* <div className="form-group">
          <span className="icon"><FiPhoneCall /></span>
          <input
            type="tel"
            className="form-control"
            id="name"
            placeholder="mobile Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          />
        </div> */}
        <div className="form-group">
          <span className="icon"><RiLockPasswordLine /></span>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?
        {' '}
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Login
        </Link>

      </p>
    </section>
  );
};

export default Register;
