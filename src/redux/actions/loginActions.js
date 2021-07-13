import {createAction} from '@reduxjs/toolkit';

const loginRequest = createAction('authorisation/loginRequest');
const loginSuccess = createAction('authorisation/loginSuccess');
const loginError = createAction('authorisation/loginError');


export default {loginRequest, loginSuccess, loginError};