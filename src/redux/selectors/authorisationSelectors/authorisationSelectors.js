import {createSelector} from '@reduxjs/toolkit';

const authorisation = state => state.session.isAuth;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const authorisationSelector = createSelector([authorisation], authorised => {
    return authorised
});

export default {authorisation, getUserName, getUserEmail, authorisationSelector};