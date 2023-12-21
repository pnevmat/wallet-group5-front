import { createSlice } from '@reduxjs/toolkit';

const registrationInitialState = {};

const userDataReducer = createSlice({
  name: 'userData',
  initialState: registrationInitialState,
  reducers: {
    registration: (state, { payload }) => payload.user,
  },
});

export const { registration } = userDataReducer.actions;

export default userDataReducer.reducer;
