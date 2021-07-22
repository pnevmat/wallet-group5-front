import React from 'react';

import FinanceAppBoyImg from './financeAppBoyImg/FinanceAppBoyImg';
import FinanceAppGirlImg from './financeAppGirlImg/FinanceAppGirlImg';
import ExchangeBox from '../ExchangeBox/ExchangeBox';
export default function AppBar(props) {
  const { path } = props.match;

  return (
    <>
{/* <ExchangeBox/> */}

      {path === '/' || path === '/login' ? (
        <FinanceAppBoyImg />
      ) : (
        <FinanceAppGirlImg />
      )}
    </>
  );
}
