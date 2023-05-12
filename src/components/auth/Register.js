import React from 'react';
import { FaUser, FaRegUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Register = () => (
  <section className="login-register">
    <div className="loginIcon"><FaUser /></div>
    <h2>Welcome</h2>
    <form>
      <h4>Register</h4>
      <div className="form-group">
        <span className="icon"><HiOutlineMailOpen /></span>
        <input
          type="email"
          className="form-control"
          id="Email1"
          placeholder="Enter email"
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
      </div>
      <div className="form-group">
        <span className="icon"><FaRegUser /></span>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter full name"
          // onChange={(e) => setName(e.target.value)}
          // value={name}
        />
      </div>
      <div className="form-group">
        <span className="icon"><FiPhoneCall /></span>
        <input
          type="tel"
          className="form-control"
          id="name"
          placeholder="mobile Number"
          // onChange={(e) => setPhoneNumber(e.target.value)}
          // value={phoneNumber}
        />
      </div>
      <div className="form-group">
        <span className="icon"><RiLockPasswordLine /></span>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          // onChange={(e) => setPassowrd(e.target.value)}
          // value={password}
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

export default Register;
