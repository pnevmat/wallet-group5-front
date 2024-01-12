import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getStatisticsRequest,
  limitedStatisticsRequest,
} from '../../api/apiRequests';
import {
  getStatistics,
  limitedStatistics,
} from '../../redux/reducers/statisticsTransactionReducer';

import ChartComponent from './Chart/Chart';
import Table from './Table/Table';

import authSelectors from '../../redux/selectors/authorisationSelectors';

import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  const dispatch = useDispatch();

  const userToken = useSelector(authSelectors.getUserToken);
  const statistics = useSelector(store => store.statisticsTransactions);

  useEffect(() => {
    const handleGetStatistics = async () => {
      const data = await getStatisticsRequest(userToken);

      if (data) {
        dispatch(getStatistics(data));
      }
    };

    handleGetStatistics();
  }, [dispatch, userToken]);

  const onMonthYearSubmit = async transactionData => {
    const data = await limitedStatisticsRequest(userToken, transactionData);

    if (data) {
      dispatch(limitedStatistics(data));
    }
  };

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
