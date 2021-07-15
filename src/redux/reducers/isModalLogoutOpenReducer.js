import { createReducer } from '@reduxjs/toolkit';
import isModalLogoutOpenActions from '../actions/isModalLogoutOpenAction';

const isModalLogoutOpen = createReducer(false, {
  [isModalLogoutOpenActions]: (state, _) => !state,
});

export default isModalLogoutOpen;