import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTransactionSuccess,
  addTransactionSuccess,
} from '../../actions/transaction/transactionActions';

const transactionReducer = createReducer([], {
  [fetchTransactionSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, {payload }) => [payload.transaction, ...state],
});

export default { transactionReducer };
