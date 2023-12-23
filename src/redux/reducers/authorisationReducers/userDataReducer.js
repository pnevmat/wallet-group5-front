import { createSlice } from '@reduxjs/toolkit';

const authorisationInitialState = {};

const authUserDataReducer = createSlice({
  name: 'authUserData',
  initialState: authorisationInitialState,
  reducers: {
    getUserData: (_, { payload }) => {
      return {
        avatarURL: payload.avatarURL,
        balance: payload.balance,
        email: payload.email,
        id: payload.id,
        name: payload.name,
      };
    },
    logout: () => authorisationInitialState,
  },
});

export const { getUserData, logout } = authUserDataReducer.actions;

export default authUserDataReducer.reducer;
