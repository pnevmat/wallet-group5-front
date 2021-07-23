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

const getUserRegBalance = state => state.userData.registrationData.balance;

const getUserAuthBalance = state => state.userData.authorisationData.balance;

const getUserToken = state=> {
  if (typeof state.userToken.registrationToken !== 'object')
  {
    return state.userToken.registrationToken;
  } else {
    return state.userToken.authorisationToken;
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

const userRegBalanceSelector = createSelector([getUserRegBalance], balace => {
  return balace;
});

const userAuthBalanceSelector = createSelector([getUserAuthBalance], balace => {
  return balace;
});

export default {
  getIsAuthorisation,
  getUserName,
  getUserEmail,
  getUserRegBalance,
  getUserAuthBalance,
  getUserToken,
  getUserAvatar,
  authorisationSelector,
  userNameSelector,
  userRegBalanceSelector,
  userAuthBalanceSelector,
  userTokenSelector,
  
};
