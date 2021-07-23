import React from 'react';
import { useSelector } from 'react-redux';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';

import UserMenu from '../components/UserMenu/UserMenu';
import DashboardPageContainer from '../components/dashboardPageContainer/dashboardPageContainer';

const DashboardPage = () => {
  const userRegBalance = useSelector(authorisationSelectors.getUserRegBalance);
  console.log('User reg balance: ', userRegBalance);
  const userAuthBalance = useSelector(authorisationSelectors.getUserAuthBalance);
  console.log('User auth balance: ');
  return (
    <>
      <UserMenu />
      <DashboardPageContainer 
      balance={userRegBalance || userRegBalance === 0 ? userRegBalance : userAuthBalance}
    />
    </>
  );
};

export default DashboardPage;
