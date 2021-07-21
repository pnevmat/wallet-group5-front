import {createReducer} from '@reduxjs/toolkit';

import statisticsActions from '../actions/statisticsActions';
import limitedStatisticsActions from '../actions/limitedStatisticsActions';

const statisticsTransactionReducerInitialState = [];

const statisticsTransactionReducer = createReducer(statisticsTransactionReducerInitialState, {
    [statisticsActions.statisticsSuccess]: (_, {payload}) => payload.data,
    [limitedStatisticsActions.limitedStatisticsSuccess]: (_, {payload}) => payload.data
});

export default {statisticsTransactionReducer};