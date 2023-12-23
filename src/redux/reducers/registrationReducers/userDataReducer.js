import { createSlice } from '@reduxjs/toolkit';

const registrationInitialState = {};

const regUserDataReducer = createSlice({
  name: 'regUserData',
  initialState: registrationInitialState,
  reducers: {
    getRegUserData: (state, { payload }) => payload,
  },
});

export const { getRegUserData } = regUserDataReducer.actions;

export default regUserDataReducer.reducer;
