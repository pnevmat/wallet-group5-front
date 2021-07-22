import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import TransactionTable from '../transactionTable/transactionTable';
import AddTransactionButton from '../addTransactionButton/AddTransactionButton';

import styles from './dashboardPageContainer.module.css';

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