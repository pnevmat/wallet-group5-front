import { createSlice } from '@reduxjs/toolkit';

const statisticsTransactionReducerInitialState = [];

const statisticsTransactionReducer = createSlice({
  name: 'statisticsTransactions',
  initialState: statisticsTransactionReducerInitialState,
  reducers: {
    getStatistics: (state, { payload }) => payload.data,
    limitedStatistics: (state, { payload }) => payload.data,
  },
});

export const { getStatistics, limitedStatistics } =
  statisticsTransactionReducer.actions;

export default statisticsTransactionReducer.reducer;
