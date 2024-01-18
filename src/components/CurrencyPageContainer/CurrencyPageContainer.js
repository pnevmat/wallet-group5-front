import React from 'react';

import Navigation from '../Navigation/Navigation';
import ExchangeBox from '../ExchangeBox/ExchangeBox';

import styles from './CurrencyPageContainer.module.css';

const CurrencyPageContainer = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <ExchangeBox />
    </div>
  );
};

export default CurrencyPageContainer;
