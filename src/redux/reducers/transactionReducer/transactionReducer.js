import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTransactionSuccess,
  addTransactionSuccess,
  deleteTransactionSuccess,
} from '../../actions/transaction/transactionActions';

const transactionReducer = createReducer([], {
  [fetchTransactionSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, {payload }) => [payload.transaction, ...state],
  [deleteTransactionSuccess]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
});

export default { transactionReducer };
