import { createSlice } from '@reduxjs/toolkit';

const authorisationInitialState = {};

const authErrorReducer = createSlice({
  name: 'authError',
  initialState: authorisationInitialState,
  reducers: {
    registrationError: (_, { payload }) => payload.response.data.message,
    loginError: (_, { payload }) => {
      if (typeof payload === 'string') {
        return payload;
      } else if (typeof payload === 'object') {
        return payload.message;
      } else {
        return payload.response.data.message;
      }
    },
    logoutError: (state, { payload }) => payload.message,
    limitedStatisticsError: (state, { payload }) => payload.message,
    userDataError: (state, { payload }) => payload.message,
    cleaning: () => authorisationInitialState,
  },
});

export const {
  registrationError,
  loginError,
  logoutError,
  limitedStatisticsError,
  userDataError,
  cleaning,
} = authErrorReducer.actions;

export default authErrorReducer.reducer;
