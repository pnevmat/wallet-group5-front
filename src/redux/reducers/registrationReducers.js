import {createReducer} from '@reduxjs/toolkit';

import registrationActions from '../actions/registrationAction';
import loginActions from '../actions/loginActions';

const registrationInitialState = {};

const registrationReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, {payload}) => payload.user.token,
    [loginActions.loginSuccess]: () => registrationInitialState,
});

const userDataReducer = createReducer(registrationInitialState, {
    [registrationActions.registrationSuccess]: (_, {payload}) => payload.user
});

export default {registrationReducer, userDataReducer};