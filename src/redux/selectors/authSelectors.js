// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {createSelector} from '@reduxjs/toolkit';

const authorisation = state => state.session.isAuth;
const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const authorisationSelector = createSelector([authorisation], authorised => {
    return authorised
});

const authSelectors = { getIsAuthenticated, getUserName, getUserEmail };


export default {authorisation, authorisationSelector, authSelectors};