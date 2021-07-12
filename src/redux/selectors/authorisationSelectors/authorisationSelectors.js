import { createSelector } from '@reduxjs/toolkit';

const authorisation = state => state.session.isAuth;
const getUserName = state => state.userData.registrationData.name;
const getUserEmail = state => state.auth.user.email;
const getUserBalance = state => state.userData.registrationData.balance;

const authorisationSelector = createSelector([authorisation], authorised => {
  return authorised;
});

const userNameSelector = createSelector([getUserName], userName => {
  return userName;
});

const userBalanceSelector = createSelector([getUserBalance], balace => {
  return balace;
});

export default {
  authorisation,
  getUserName,
  getUserEmail,
  getUserBalance,
  authorisationSelector,
  userNameSelector,
  userBalanceSelector,
};
