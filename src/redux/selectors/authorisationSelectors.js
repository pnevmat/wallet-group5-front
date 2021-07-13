import { createSelector } from '@reduxjs/toolkit';

const getIsAuthorisation = state => state.session.isAuth;
const getUserName = state => state.userData.registrationData.name;
const getUserEmail = state => state.auserDatauth.user.email;
const getUserBalance = state => state.userData.registrationData.balance;

const authorisationSelector = createSelector([getIsAuthorisation], authorised => {
  return authorised;
});

const userNameSelector = createSelector([getUserName], userName => {
  return userName;
});

const userBalanceSelector = createSelector([getUserBalance], balace => {
  return balace;
});

export default {
  getIsAuthorisation,
  getUserName,
  getUserEmail,
  getUserBalance,
  authorisationSelector,
  userNameSelector,
  userBalanceSelector,
};
