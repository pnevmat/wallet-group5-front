import React from 'react';
import { useLocation } from 'react-router-dom';

import FinanceAppBoyImg from './FinanceAppBoyImg/FinanceAppBoyImg';
import FinanceAppGirlImg from './FinanceAppGirlImg/FinanceAppGirlImg';

export default function AppBar() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' || pathname === '/login' ? (
        <FinanceAppBoyImg />
      ) : (
        <FinanceAppGirlImg />
      )}
    </>
  );
}
