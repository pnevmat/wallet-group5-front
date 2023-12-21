import { createSlice } from '@reduxjs/toolkit';

const registrationInitialState = {};

const registrationReducer = createSlice({
  name: 'registration',
  initialState: registrationInitialState,
  reducers: {
    registration: (state, { payload }) => payload.user.token,
    login: () => registrationInitialState,
  },
});

export const { registration, login } = registrationReducer.actions;

export default registrationReducer.reducer;
