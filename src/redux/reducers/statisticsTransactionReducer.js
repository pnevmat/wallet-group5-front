import {createReducer} from '@reduxjs/toolkit';

import statisticsActions from '../actions/statisticsActions';

const statisticsTransactionReducerInitialState = [];

const statisticsTransactionReducer = createReducer(statisticsTransactionReducerInitialState, {
    [statisticsActions.statisticsSuccess]: (_, {payload}) => payload,
});

export default {statisticsTransactionReducer};