import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserDataRequest } from '../api/apiRequests';
import { getUserData } from '../redux/reducers/authorisationReducers/userDataReducer';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';
import { getTransaction } from '../redux/selectors/transactionSelectors/transactionSelectors';

import UserMenu from '../components/UserMenu/UserMenu';
import ReportsPageContainer from '../components/ReportsPageContainer/ReportsPageContainer';

const ReportsPage = () => {
  const userToken = useSelector(authorisationSelectors.getUserToken);

  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetUserData = async () => {
      const response = await getUserDataRequest(userToken);

      if (response) {
        dispatch(getUserData(response));
      }
    };
    handleGetUserData();
  }, [dispatch]);

  const userRegBalance = useSelector(authorisationSelectors.getUserRegBalance);
  const userAuthBalance = useSelector(
    authorisationSelectors.getUserAuthBalance,
  );
  const userTransactionBalance = useSelector(getTransaction);

  const balance = () => {
    if (userRegBalance || (userRegBalance === 0 && !userTransactionBalance)) {
      return userRegBalance;
    } else if (userTransactionBalance.length !== 0) {
      return userTransactionBalance[0].balance;
    } else {
      return userAuthBalance;
    }
  };

  return (
    <>
      <UserMenu />
      <ReportsPageContainer balance={balance()} />
    </>
  );
};

export default ReportsPage;
