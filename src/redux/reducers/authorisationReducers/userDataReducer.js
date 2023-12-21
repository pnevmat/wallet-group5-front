import { createSlice } from '@reduxjs/toolkit';

const authorisationInitialState = {};

const userDataReducer = createSlice({
  name: 'userData',
  initialState: authorisationInitialState,
  reducers: {
    login: (state, { payload }) => {
      return {
        avatarURL: payload.data.avatarURL,
        balance: payload.data.balance,
        email: payload.data.email,
        id: payload.data.id,
        name: payload.data.name,
      };
    },
    getUserData: (_, { payload }) => {
      return {
        avatarURL: payload.user.avatarURL,
        balance: payload.user.balance,
        email: payload.user.email,
        id: payload.user.id,
        name: payload.user.name,
      };
    },
    logout: () => authorisationInitialState,
  },
});

export const { login, getUserData, logout } = userDataReducer.actions;

export default userDataReducer.reducer;
