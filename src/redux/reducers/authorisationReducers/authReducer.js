import { createSlice } from '@reduxjs/toolkit';

const authReducerInitialState = false;

const authReducer = createSlice({
  name: 'auth',
  initialState: authReducerInitialState,
  reducers: {
    isRegistered: () => true,
    isLogin: () => true,
    userData: () => true,
    sessionLogout: () => false,
  },
});

export const { isRegistered, isLogin, userData, sessionLogout } =
  authReducer.actions;

export default authReducer.reducer;
