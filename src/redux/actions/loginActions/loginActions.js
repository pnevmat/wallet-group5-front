import {createAction} from '@reduxjs/toolkit';

export const loginRequest = createAction('authorisation/loginRequest');
export const loginSuccess = createAction('authorisation/loginSuccess');
export const loginError = createAction('authorisation/loginError');

export const logoutRequest = createAction('authorisation/logoutRequest');
export const logoutSuccess = createAction('authorisation/logoutSuccess');
export const logoutError = createAction('authorisation/logoutError');

export const getCurrentUserRequest = createAction('authorisation/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('authorisation/getCurrentUserSuccess');
export const getCurrentUserError = createAction('authorisation/getCurrentUserError');


// export default {loginRequest, loginSuccess, loginError};