import {createReducer} from '@reduxjs/toolkit';

import registrationActions from '../../actions/registrationActions/registrationAction';

const registrationInitialState = {};

const registrationReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, payload) => payload.token
});

const userDataReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, payload) => payload.data
});

export default {registrationReducer, userDataReducer};