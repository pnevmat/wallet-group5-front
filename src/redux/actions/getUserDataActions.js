import {createAction} from '@reduxjs/toolkit';

const getUserDataRequest = createAction('authorisation/getUserDataRequest');
const getUserDataSuccess = createAction('authorisation/getUserDataSuccess');
const getUserDataError = createAction('authorisation/getUserDataError');

export default {getUserDataRequest, getUserDataSuccess, getUserDataError};