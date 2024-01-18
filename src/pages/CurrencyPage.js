import React from 'react';

import CurrencyPageContainer from '../components/CurrencyPageContainer/CurrencyPageContainer';
import UserMenu from '../components/UserMenu/UserMenu';

const CurrencyPage = () => {
  return (
    <>
      <UserMenu />
      <CurrencyPageContainer />
    </>
  );
};

export default CurrencyPage;
