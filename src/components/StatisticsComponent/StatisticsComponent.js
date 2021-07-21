import React from 'react';

import Navigation from '../Navigation/Navigation';
import Balance from '../balance/balance';
import ExchangeBox from '../ExchangeBox/ExchangeBox';

import styles from './statisticsComponent.module.css';

const StatisticsComponent = (props) => {
  return (
   
    <div className={styles.container}>
      
      <Navigation />
      <Balance balance={props.balance} />
      <ExchangeBox />
    </div>
  );
};
export default StatisticsComponent;
