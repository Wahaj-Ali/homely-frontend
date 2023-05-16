// eslint-disable-next-line import/no-extraneous-dependencies
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000/api/v1/houses',
});

const DeleteHouseSlice = (id) => {
  const [house, setHouse] = useState([]);

  // DELETE with Axios
  client.delete(`${id}`);
  setHouse(
    house.filter((house) => house.id !== id),
  );
};

export default DeleteHouseSlice.reducer;
