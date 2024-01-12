import { createSlice } from '@reduxjs/toolkit';

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
    editTransaction: (state, { payload }) => {
      let newState = state.map(transaction => {
        if (transaction.id === payload.id) {
          return payload;
        }
        return transaction;
      });

      return newState;
    },
    deleteTransaction: (state, { payload }) => {
      return state.filter(el => el.id !== payload.id);
    },
  },
});

export const {
  getTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
} = transactionReducer.actions;

export default transactionReducer.reducer;
