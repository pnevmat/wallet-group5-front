import React from 'react';
import { useSelector } from 'react-redux';

import userBalanceSelector from '../components/balance/balance';

import AddTransactionButton from '../components/addTransactionButton/AddTransactionButton';
import Navigation from '../components/Navigation/Navigation';
import FormAuth from '../components/FormAuth/FormAuth';
import AppBar from '../components/AppBar/AppBar';
import Balance from '../components/balance/balance';

const DashboardPage = () => {
  const userBalance = useSelector(userBalanceSelector);
  return (
    <>
      <h2>Трэш</h2>
      <AppBar />
      <FormAuth />
      <h2>Нормальные компоненты</h2>
      <Navigation />
      <Balance userBalance={userBalance} />
      <AddTransactionButton />
    </>
  );
};

export default DashboardPage;
