import {createSelector} from '@reduxjs/toolkit';

const authorisation = state => state.session.isAuth;

const authorisationSelector = createSelector([authorisation], authorised => {
    return authorised
});

export default {authorisation, authorisationSelector};