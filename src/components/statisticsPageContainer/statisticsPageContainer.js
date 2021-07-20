import React from 'react';

import StatisticsComponent from '../StatisticsComponent/StatisticsComponent';
import DiagramTab from '../diagramTab/diagramTab';

import styles from './statisticsPageContainer.module.css';

const StatisticsPageContainer = (props) => {
    return (
        <div className={styles.statisticsContainer}>
            <StatisticsComponent />
            <DiagramTab />
        </div>
    );
};

export default StatisticsPageContainer;