import { createSlice } from '@reduxjs/toolkit';

const authReducerInitialState = false;

const authReducer = createSlice({
  name: 'auth',
  initialState: authReducerInitialState,
  reducers: {
    registration: () => true,
    isLogin: () => true,
    userData: () => true,
    logout: () => false,
  },
});

export const { registration, isLogin, userData, logout } = authReducer.actions;

export default authReducer.reducer;
