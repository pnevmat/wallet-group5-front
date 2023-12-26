import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getUserDataOperation from '../redux/operations/getUserDataOperation';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';
import { getTransaction } from '../redux/selectors/transactionSelectors/transactionSelectors';

import UserMenu from '../components/UserMenu/UserMenu';
import BudgetPageContainer from '../components/BudgetPageContainer/BudgetPageContainer';

const BudgetPage = () => {
  const userToken = useSelector(authorisationSelectors.getUserToken);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataOperation(userToken));
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
      <BudgetPageContainer balance={balance()} />
    </>
  );
};

export default BudgetPage;
