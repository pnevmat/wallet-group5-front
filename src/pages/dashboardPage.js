import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getUserDataOperation from '../redux/operations/getUserDataOperation';

import authorisationSelectors from '../redux/selectors/authorisationSelectors';

import UserMenu from '../components/UserMenu/UserMenu';
import DashboardPageContainer from '../components/dashboardPageContainer/dashboardPageContainer';

const DashboardPage = () => {
  const userToken = useSelector(authorisationSelectors.getUserToken);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataOperation(userToken))
  }, [dispatch]);

  const userRegBalance = useSelector(authorisationSelectors.getUserRegBalance);
  const userAuthBalance = useSelector(authorisationSelectors.getUserAuthBalance);
  
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
