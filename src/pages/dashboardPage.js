import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import getUserDataOperation from '../redux/operations/getUserDataOperation';
import { getUserDataRequest } from '../api/apiRequests';
import { getUserData } from '../redux/reducers/authorisationReducers/userDataReducer';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';
import { getTransaction } from '../redux/selectors/transactionSelectors/transactionSelectors';

import UserMenu from '../components/UserMenu/UserMenu';
import DashboardPageContainer from '../components/DashboardPageContainer/DashboardPageContainer';

const DashboardPage = () => {
  const userToken = useSelector(authorisationSelectors.getUserToken);

  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetUserData = async () => {
      const { user } = await getUserDataRequest(userToken);

      if (user) dispatch(getUserData(user));
    };
    handleGetUserData();
  }, [dispatch]);

  const userRegBalance = useSelector(authorisationSelectors.getUserRegBalance);
  const userAuthBalance = useSelector(
    authorisationSelectors.getUserAuthBalance,
  );
  const userTransactionBalance = useSelector(getTransaction);

  const balance = () => {
    if ((userRegBalance || userRegBalance === 0) && !userTransactionBalance) {
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
      <DashboardPageContainer balance={balance()} />
    </>
  );
};

export default DashboardPage;
