import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTransactionSuccess,
  addTransactionSuccess,
} from '../../actions/transaction/transactionActions';

const transactionReducer = createReducer([], {
  [fetchTransactionSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, {payload }) => [...state, payload.transaction],
});

export default { transactionReducer };
