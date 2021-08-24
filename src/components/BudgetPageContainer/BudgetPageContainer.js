import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import BudgetComponent from '../budgetComponent/budgetComponent';

import styles from './budgetPageContainer.module.css';

const BudgetPageContainer = (props) => {
    return (
        <div className={styles.dashboardContainer}>
            <StatisticsComponent balance={props.balance} />
            <BudgetComponent />
        </div>
    );
};

export default BudgetPageContainer;