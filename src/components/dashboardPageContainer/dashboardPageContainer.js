import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import TransactionTable from '../TransactionTable/TransactionTable';
import AddTransactionButton from '../AddTransactionButton/AddTransactionButton';

import styles from './DashboardPageContainer.module.css';

const DashboardPageContainer = (props) => {
    return (
        <div className={styles.dashboardContainer}>
            <StatisticsComponent balance={props.balance} />
            <TransactionTable />
            <AddTransactionButton />
        </div>
    );
};

export default DashboardPageContainer;