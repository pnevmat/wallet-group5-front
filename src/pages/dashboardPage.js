import React from 'react';
import { useSelector } from 'react-redux';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';


import UserMenu from '../components/UserMenu/UserMenu';
import DashboardPageContainer from '../components/dashboardPageContainer/dashboardPageContainer';

const DashboardPage = () => {
  const userBalance = useSelector(authorisationSelectors.getUserBalance);
  console.log('User balance', userBalance);
  return (
    <>
      <UserMenu />
      <DashboardPageContainer balance={userBalance} />
    </>
  );
};

export default DashboardPage;
