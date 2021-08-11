import {createAction} from '@reduxjs/toolkit';

const cleaningRequest = createAction('cleaning/cleaningRequest');
const cleaningSuccess = createAction('cleaning/cleaningSuccess');
const cleaningError = createAction('cleaning/cleaningError');

export default {cleaningRequest, cleaningSuccess, cleaningError};