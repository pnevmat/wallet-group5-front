import React from 'react';
import { useSelector } from 'react-redux';

import userBalanceSelector from '../components/balance/balance';

import Navigation from '../components/Navigation/Navigation';
import Balance from '../components/balance/balance';
import AddTransactionButton from '../components/addTransactionButton/AddTransactionButton';
import UserMenu from '../components/UserMenu/UserMenu';

const DashboardPage = (props) => {
  const userBalance = useSelector(userBalanceSelector);
  return (
    <>
      <UserMenu />
      <Navigation />
      <Balance userBalance={userBalance} />
      <AddTransactionButton />
    </>
  );
};

export default DashboardPage;
