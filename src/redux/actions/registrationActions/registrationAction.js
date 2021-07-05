import {createAction} from '@reduxjs/toolkit';

const registrationRequest = createAction('authorisation/registrationRequest');
const registrationSuccess = createAction('authorisation/registrationSuccess');
const registrationError = createAction('authorisation/registrationError');

export default {registrationRequest, registrationSuccess, registrationError};