import {createReducer} from '@reduxjs/toolkit';

import registrationActions from '../../actions/registrationActions/registrationAction'
import loginActions from '../../actions/loginActions/loginActions';

const authorisationInitialState = {};
const authReducerInitialState = true;

const authorisationReducer = createReducer(authorisationInitialState, {
    [loginActions.loginSuccess]: (_, payload) => payload.token
});

const userDataReducer = createReducer(authorisationInitialState, {
    [loginActions.loginSuccess]: (_, payload) => payload.data
});

const authReducer = createReducer(authReducerInitialState, {
    [registrationActions.registrationSuccess]: () => true,
    [loginActions.loginSuccess]: () => true
});

const authErrorReducer = createReducer(authorisationInitialState, {
    [registrationActions.registrationError]: (_, {payload}) => payload.message,
    [loginActions.loginError]: (_, {payload}) => payload.message
});

export default {authorisationReducer, userDataReducer, authReducer, authErrorReducer};