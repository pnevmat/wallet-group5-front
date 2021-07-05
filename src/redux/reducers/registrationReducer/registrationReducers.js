import {createReducer} from '@reduxjs/toolkit';

import registrationActions from '../../actions/registrationActions/registrationAction';

const registrationInitialState = {};

const registrationReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, payload) => payload.token
});

const userDataReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, payload) => payload.data
});

const authReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: () => true
});

const authErrorReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationError]: (_, payload) => payload.message
});

export default {registrationReducer, userDataReducer, authReducer, authErrorReducer};