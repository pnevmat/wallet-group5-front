import { createSlice } from '@reduxjs/toolkit';

const registrationInitialState = {};

const regUserDataReducer = createSlice({
  name: 'regUserData',
  initialState: registrationInitialState,
  reducers: {
    registration: (state, { payload }) => payload.user,
  },
});

export const { registration } = regUserDataReducer.actions;

export default regUserDataReducer.reducer;
