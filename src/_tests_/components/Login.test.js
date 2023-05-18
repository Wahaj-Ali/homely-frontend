import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { fetchCurrentUser, login } from '../../Redux/Reducers/authSlice';
import Login from '../../components/auth/Login';
import thunk from 'redux-thunk';
// import store from '../../Redux/store';


// Create a mock store with the desired initial state
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  auth: {
    loggedIn: false,
  },
});

jest.mock('../../Redux/Reducers/authSlice', () => ({
  fetchCurrentUser: jest.fn(),
  login: jest.fn(),
}));

describe('Login', () => {
  it('submits the login form successfully', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = getByPlaceholderText('Useremail');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    // Fill in the form inputs
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
  });
});
