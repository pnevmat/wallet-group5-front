import React from 'react';
import { useSelector } from 'react-redux';

import userBalanceSelector from '../components/balance/balance';

import AddTransactionButton from '../components/addTransactionButton/AddTransactionButton';
import Navigation from '../components/Navigation/Navigation';
import Navigation1 from '../components/Navigation1/Navigation1';
import Header from '../components/Header/Header';
import AuthNav from '../components/AuthNav/AuthNav';
import FormAuth from '../components/FormAuth/FormAuth';
import AppBar from '../components/AppBar/AppBar';
import Balance from '../components/balance/balance';

const DashboardPage = () => {
  const userBalance = useSelector(userBalanceSelector);
  return (
    <>
      <h2>Трэш</h2>
      {/* <Header /> */}
      <AppBar />
      <AuthNav />
      <Navigation1 />
      <FormAuth />
      <h2>Нормальные компоненты</h2>
      <Navigation />
      <Balance userBalance={userBalance} />
      <AddTransactionButton />
    </>
  );
};

export default DashboardPage;
