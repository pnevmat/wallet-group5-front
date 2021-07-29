import React from 'react';

import FinanceAppBoyImg from './financeAppBoyImg/FinanceAppBoyImg';
import FinanceAppGirlImg from './financeAppGirlImg/FinanceAppGirlImg';

export default function AppBar(props) {
  const { path } = props.match;

  return (
    <>
      {path === '/' || path === '/login' ? (
        <FinanceAppBoyImg />
      ) : (
        <FinanceAppGirlImg />
      )}
    </>
  );
}
