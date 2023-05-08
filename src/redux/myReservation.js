import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dragonsURL = 'https://api.spacexdata.com/v3/dragons';
const dragonsList = [];

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const resp = await axios.get(dragonsURL);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: dragonsList,
  reducers: {
    reserveDragon(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: true };
      });
    },
    cancelReservation(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: false };
      });
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchDragons.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[1].id,
          dragon_name: element[1].name,
          type: element[1].type,
          flickr_images: element[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export const { reserveDragon, cancelReservation } = dragonSlice.actions;
export default dragonSlice.reducer;
