import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import ReportsComponent from '../ReportsComponent/ReportsComponent';

import styles from './reportsPageContainer.module.css';

const ReportsPageContainer = (props) => {
    return (
        <div className={styles.dashboardContainer}>
            <StatisticsComponent balance={props.balance} />
            <ReportsComponent />
        </div>
    );
};

export default ReportsPageContainer;