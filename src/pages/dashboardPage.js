import React from 'react';
import { useSelector } from 'react-redux';

import userBalanceSelector from '../components/balance/balance';

import Navigation from '../components/Navigation/Navigation';
import Balance from '../components/balance/balance';
import AddTransactionButton from '../components/addTransactionButton/AddTransactionButton';
import AppBar from '../components/AppBar/AppBar';
import UserMenu from '../components/UserMenu/UserMenu';

const DashboardPage = () => {
  const userBalance = useSelector(userBalanceSelector);
  return (
    <>
      <h2>Нормальные компоненты</h2>
      <AppBar />
      <h2>Остаются на этой странице</h2>
      <UserMenu />
      <Navigation />
      <Balance userBalance={userBalance} />
      <AddTransactionButton />
    </>
  );
};

export default DashboardPage;
