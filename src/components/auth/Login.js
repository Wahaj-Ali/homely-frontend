import React from 'react';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Login = () => (
  <section>
    <div className="loginIcon"><FaUser /></div>
    <h2>Welcome back</h2>

    <form>
      <h4>Member Login</h4>
      <div className="form-group">
        <span className="icon"><HiOutlineMailOpen /></span>
        <input
          type="email"
          className="form-control"
          id="Email1"
          placeholder="Useremail"
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
        />
      </div>

      <div className="form-group">
        <span className="icon"><RiLockPasswordLine /></span>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          // onChange={(e) => setPassowrd(e.target.value)}
          // value={password}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    <p>
      New here?
      {' '}
      <Link to="/register" style={{ textDecoration: 'none' }}>
        Register
      </Link>
    </p>
  </section>
);

export default Login;
