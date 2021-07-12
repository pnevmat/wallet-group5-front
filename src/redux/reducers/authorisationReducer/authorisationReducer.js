import {createReducer} from '@reduxjs/toolkit';

import registrationActions from '../../actions/registrationActions/registrationAction'
import loginActions from '../../actions/loginActions/loginActions';
import logoutActions from '../../actions/logoutActions/logoutActions';

const authorisationInitialState = {};
const authReducerInitialState = false;

const authorisationReducer = createReducer(authorisationInitialState, {
    [loginActions.loginSuccess]: (_, {payload}) => payload.data.token,
    [logoutActions.logoutSuccess]: () => null
});

const userDataReducer = createReducer(authorisationInitialState, {
    [loginActions.loginSuccess]: (_, {payload}) => payload.user,
    [logoutActions.logoutSuccess]: () => authorisationInitialState
});

const authReducer = createReducer(authReducerInitialState, {
    [registrationActions.registrationSuccess]: () => true,
    [loginActions.loginSuccess]: () => true,
    [logoutActions.logoutSuccess]: () => false
});

const authErrorReducer = createReducer(authorisationInitialState, {
    [registrationActions.registrationError]: (_, {payload}) => payload.message,
    [loginActions.loginError]: (_, {payload}) => payload.message,
    [logoutActions.logoutError]: (_, {payload}) => payload.message
});

export default {authorisationReducer, userDataReducer, authReducer, authErrorReducer};