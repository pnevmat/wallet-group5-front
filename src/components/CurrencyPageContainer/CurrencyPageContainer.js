import React from 'react';

import Navigation from '../Navigation/Navigation';
import ExchangeBox from '../ExchangeBox/ExchangeBox';

import styles from './CurrencyPageContainer.module.css';

const CurrencyPageContainer = (props) => {
    return (
        <div className={styles.container}>
            <Navigation />
            <ExchangeBox props={props} />
        </div>
    );
};

export default CurrencyPageContainer;