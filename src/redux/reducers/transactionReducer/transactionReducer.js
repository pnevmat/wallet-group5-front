import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTransactionSuccess,
  addTransactionSuccess,
  deleteTransactionSuccess,
} from '../../actions/transaction/transactionActions';

const transactionReducer = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    getTransactions: (state, { payload }) => payload,
    addTransaction: (state, { payload }) => [payload, ...state],
    deleteTransaction: (state, { payload }) => {
      return state.filter(el => el.id !== payload.id);
    },
  },
});

export const { getTransactions, addTransaction, deleteTransaction } =
  transactionReducer.actions;

export default transactionReducer.reducer;
