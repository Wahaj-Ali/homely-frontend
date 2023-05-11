import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Reducers/loginSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const email = formData.get('email');
    // const password = formData.get('password');
    dispatch(login({ email, password }));
  };

  return (
    <section>
      <div className="loginIcon"><FaUser /></div>
      <h2>Welcome back</h2>

      <form onSubmit={handleSubmit}>
        <h4>Member Login</h4>
        <div className="form-group">
          <span className="icon"><HiOutlineMailOpen /></span>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Useremail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <span className="icon"><RiLockPasswordLine /></span>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
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
};

export default Login;
