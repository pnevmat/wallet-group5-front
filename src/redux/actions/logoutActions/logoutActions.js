import {createAction} from '@reduxjs/toolkit';

export const logoutRequest = createAction('authorisation/logoutRequest');
export const logoutSuccess = createAction('authorisation/logoutSuccess');
export const logoutError = createAction('authorisation/logoutError');

export default {logoutRequest, logoutSuccess, logoutError}