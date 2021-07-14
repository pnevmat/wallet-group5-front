import { createSelector } from '@reduxjs/toolkit';

const getIsAuthorisation = state => state.session.isAuth;
const getUserName = state => state.userData.registrationData.name;
const getUserEmail = state => state.auserDatauth.user.email;
const getUserBalance = state => state.userData.registrationData.balance;
const getUserToken=state=>{if (state.userToken.authorisationToken!=={}){
  console.log("Это регист токен",state.userToken.authorisationToken)
  return state.userToken.authorisationToken
} else {
  return state.userToken.registrationToken
} }

const authorisationSelector = createSelector([getIsAuthorisation], authorised => {
  return authorised;
});

const userTokenSelector=createSelector([getUserToken],userToken=>{
  return userToken
})

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
  getUserToken,
  authorisationSelector,
  userNameSelector,
  userBalanceSelector,
  userTokenSelector,
  
};
