import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import BudgetComponent from '../BudgetComponent/BudgetComponent';

import styles from './BudgetPageContainer.module.css';

const BudgetPageContainer = (props) => { 
    return (
        <div className={styles.dashboardContainer}>
            <StatisticsComponent balance={props.balance} />
            <BudgetComponent />
        </div>
    );
};

export default BudgetPageContainer;