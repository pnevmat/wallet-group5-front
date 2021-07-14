import {createSelector} from '@reduxjs/toolkit';

const getSessionErrorStatus = state => state.session.error;

const registrationSelector = createSelector([getSessionErrorStatus], error => {
    return error
});

export default {getSessionErrorStatus, registrationSelector};