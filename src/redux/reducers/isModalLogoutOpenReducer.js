import { createSlice } from '@reduxjs/toolkit';
import isModalLogoutOpenActions from '../actions/isModalLogoutOpenAction';

const isModalLogoutOpen = createSlice({
  name: 'isModalLogoutOpen',
  initialState: false,
  reducers: {
    getIsModalLogoutOpen: (state, _) => !state,
  },
});

export const { getIsModalLogoutOpen } = isModalLogoutOpen.actions;

export default isModalLogoutOpen.reducer;
