import { createSlice } from '@reduxjs/toolkit';

const authReducerInitialState = false;

const authReducer = createSlice({
  name: 'auth',
  initialState: authReducerInitialState,
  reducers: {
    registration: () => true,
    login: () => true,
    userData: () => true,
    logout: () => false,
  },
});

export const { registration, login, userData, logout } = authReducer.actions;

export default authReducer.reducer;
