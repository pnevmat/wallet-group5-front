import {createSelector} from '@reduxjs/toolkit';

const authorisation = state => state.session.isAuth;
const getUserName = state => state.userData.registrationData.name;
const getUserEmail = state => state.auth.user.email;

const authorisationSelector = createSelector([authorisation], authorised => {
    return authorised
});

const userNameSelector = createSelector([getUserName], userName => {
    return userName
});

export default {authorisation, getUserName, getUserEmail, authorisationSelector, userNameSelector};