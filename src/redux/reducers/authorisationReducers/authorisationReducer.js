import { createSlice } from '@reduxjs/toolkit';

const authorisationInitialState = {};

const authorisationReducer = createSlice({
  name: 'authorisation',
  initialState: authorisationInitialState,
  reducers: {
    login: (state, { payload }) => payload.token,
    logout: () => null,
  },
});

export const { login, logout } = authorisationReducer.actions;

export default authorisationReducer.reducer;
