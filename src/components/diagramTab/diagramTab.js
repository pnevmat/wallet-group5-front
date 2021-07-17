import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import statisticsOperation from '../../redux/operations/statisticsOperation';

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

    const statistics = useSelector(statisticsSelector.statisticsTransactionsSelector);
    console.log('Statistics page transactions', statistics);

    return (
        <div className={styles.container}>
            <ChartComponent chartPercentage={statistics.categories} />
            <Table 
                table={statistics.categories}
                cost={statistics.costBalance}
                income={statistics.incomeBalance}
            />
        </div>
    );
};

export default DiagramTab;