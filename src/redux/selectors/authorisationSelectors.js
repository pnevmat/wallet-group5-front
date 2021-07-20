import { createSelector } from '@reduxjs/toolkit';

const getIsAuthorisation = state => state.session.isAuth;

const getUserName = state => {
  const regName = state.userData.registrationData.name;
  const authName = state.userData.authorisationData.name;
  if (regName) {
    return regName;
  } else if (authName) {
    return authName;
  }
};

const getUserEmail = state => state.auserDatauth.user.email;

const getUserBalance = state => state.userData.registrationData.balance;

const getUserToken = state=> {
  if (state.userToken.authorisationToken!=={})
  {
    return state.userToken.authorisationToken;
  } else {
    return state.userToken.registrationToken;
  };
};

const getUserAvatar = state => {
  const regAvatar = state.userData.registrationData.avatarURL;
  const authAvatar = state.userData.authorisationData.avatarURL;
  if (regAvatar) {
    return regAvatar;
  } else if (authAvatar) {
    return authAvatar;
  };
};

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
  getUserAvatar,
  authorisationSelector,
  userNameSelector,
  userBalanceSelector,
  userTokenSelector,
  
};
