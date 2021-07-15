import { createSelector } from '@reduxjs/toolkit';

const getStatisticsTransactions = state => state.statisticsTransactions.data;

const statisticsTransactionsSelector = createSelector([getStatisticsTransactions], data => {
  return data;
});



export default {
    getStatisticsTransactions,
    statisticsTransactionsSelector,
};
