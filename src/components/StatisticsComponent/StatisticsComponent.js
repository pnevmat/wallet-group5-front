import React from 'react';

import Navigation from '../Navigation/Navigation';
import Balance from '../balance/balance';
import ExchangeBox from '../ExchangeBox/ExchangeBox';

import styles from './statisticsComponent.module.css';

const StatisticsComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabletContainer}>
        <Navigation />
        <Balance balance={props.balance} />
      </div>
      <ExchangeBox />
    </div>
  );
};
export default StatisticsComponent;
