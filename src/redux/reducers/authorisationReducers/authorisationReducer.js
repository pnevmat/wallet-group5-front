import { createSlice } from '@reduxjs/toolkit';

const authorisationInitialState = {};

const authorisationReducer = createSlice({
  name: 'authorisation',
  initialState: authorisationInitialState,
  reducers: {
    registration: (state, { payload }) => payload.token,
    login: (state, { payload }) => payload.token,
    logout: state => (state = {}),
  },
});

export const { registration, login, logout } = authorisationReducer.actions;

export default authorisationReducer.reducer;
