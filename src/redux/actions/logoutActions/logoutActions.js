import {createAction} from '@reduxjs/toolkit';

const logoutRequest = createAction('authorisation/logoutRequest');
const logoutSuccess = createAction('authorisation/logoutSuccess');
const logoutError = createAction('authorisation/logoutError');

export default {logoutRequest, logoutSuccess, logoutError};