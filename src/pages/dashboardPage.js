import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { getUserDataRequest } from '../api/apiRequests';
import { getUserData } from '../redux/reducers/authorisationReducers/userDataReducer';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';
import { getTransaction } from '../redux/selectors/transactionSelectors/transactionSelectors';

import UserMenu from '../components/UserMenu/UserMenu';
import DashboardPageContainer from '../components/DashboardPageContainer/DashboardPageContainer';

import ts from '../utils/toastifyStyles/toastify.module.css';

const DashboardPage = () => {
  const [error, setError] = useState(false);

  const userToken = useSelector(authorisationSelectors.getUserToken);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetUserData = async () => {
      const { user, error } = await getUserDataRequest(userToken);
      if (user) dispatch(getUserData(user));
      if (error) setError(error);
    };
    handleGetUserData();
  }, [dispatch, userToken]);

  useEffect(() => {
    if (error && typeof error === 'string') {
      const toastId = 2;
      const notify = () => {
        toast(`${error}`, {
          toastId: toastId,
          className: ts.error,
        });
      };
      notify();
    }
  }, [dispatch, error]);

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
      <ToastContainer />
      <UserMenu />
      <DashboardPageContainer balance={balance()} />
    </>
  );
};

export default DashboardPage;
