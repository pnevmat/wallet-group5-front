import React from 'react';

import FinanceAppBoyImg from './FinanceAppBoyImg/FinanceAppBoyImg';
import FinanceAppGirlImg from './FinanceAppGirlImg/FinanceAppGirlImg';

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
