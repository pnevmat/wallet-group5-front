import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import statisticsOperation from '../../redux/operations/statisticsOperation';
import limitedStatisticsOperation from '../../redux/operations/limitedStatisticsOperation';

import ChartComponent from './chart/chart';
import Table from './table/table';

import authSelectors from '../../redux/selectors/authorisationSelectors';
import statisticsSelector from '../../redux/selectors/statisticsSelector';

import styles from './diagramTab.module.css';

const DiagramTab = () => {
    const dispatch = useDispatch();
    
    const userToken = useSelector(authSelectors.getUserToken)

    useEffect(() => {
        dispatch(statisticsOperation(userToken))
    }, []);

    const onMonthYearSubmit = transactionData => dispatch(limitedStatisticsOperation(userToken, transactionData));

    const statistics = useSelector(statisticsSelector.statisticsTransactionsSelector);

    return (
        <div className={styles.container}>
            <ChartComponent chartPercentage={statistics.categories} />
            <Table 
                table={statistics.categories}
                cost={statistics.costBalance}
                income={statistics.incomeBalance}
                onSubmit={onMonthYearSubmit}
            />
        </div>
    );
};

export default DiagramTab;