import { createReducer } from '@reduxjs/toolkit';

import registrationActions from '../actions/registrationAction';
import loginActions from '../actions/loginActions';
import logoutActions from '../actions/logoutActions';
import limitedStatisticsActions from '../actions/limitedStatisticsActions';

const authorisationInitialState = {};
const authReducerInitialState = false;

const authorisationReducer = createReducer(authorisationInitialState, {
  [loginActions.loginSuccess]: (_, { payload }) => payload.data.token,
  [logoutActions.logoutSuccess]: () => null,
});

const userDataReducer = createReducer(authorisationInitialState, {
  [loginActions.loginSuccess]: (_, { payload }) => {
    return {
      avatarURL: payload.data.avatarURL,
      balance: payload.data.balance,
      email: payload.data.email,
      id: payload.data.id,
      name: payload.data.name
    }
  },
  [logoutActions.logoutSuccess]: () => authorisationInitialState,
});

const authReducer = createReducer(authReducerInitialState, {
  [registrationActions.registrationSuccess]: () => true,
  [loginActions.loginSuccess]: () => true,
  [logoutActions.logoutSuccess]: () => false,
});

const authErrorReducer = createReducer(authorisationInitialState, {
  [registrationActions.registrationError]: (_, { payload }) => payload.message,
  [loginActions.loginError]: (_, { payload }) => payload.message,
  [logoutActions.logoutError]: (_, { payload }) => payload.message,
  [limitedStatisticsActions.limitedStatisticsError]: (_, {payload}) => payload.message
});

export default {
  authorisationReducer,
  userDataReducer,
  authReducer,
  authErrorReducer,
};

// {avatarURL: payload.avatarURL, balance: payload.balance, email: payload.email, id: payload.id, name: payload.name}