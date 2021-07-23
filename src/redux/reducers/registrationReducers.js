import {createReducer} from '@reduxjs/toolkit';

import registrationActions from '../actions/registrationAction';

const registrationInitialState = {};

const registrationReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, {payload}) => payload.user.token
});

const userDataReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, {payload}) => payload.user
});

export default {registrationReducer, userDataReducer};