import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import DiagramTab from '../DiagramTab/DiagramTab';

import styles from './StatisticsPageContainer.module.css';

const StatisticsPageContainer = (props) => {
    return (
        <div className={styles.statisticsContainer}>
            <StatisticsComponent
                balance={props.balance}
            />
            
            <DiagramTab />
        </div>
    );
};

export default StatisticsPageContainer;