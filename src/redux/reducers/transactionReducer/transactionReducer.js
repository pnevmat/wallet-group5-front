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
    addTransaction: (state, { payload }) => {
      const newState = [payload, ...state].sort((a, b) =>
        new Date(a.date) > new Date(b.date) ? -1 : 1,
      );

      return newState;
    },
    deleteTransaction: (state, { payload }) => {
      return state.filter(el => el.id !== payload.id);
    },
  },
});

export const { getTransactions, addTransaction, deleteTransaction } =
  transactionReducer.actions;

export default transactionReducer.reducer;
