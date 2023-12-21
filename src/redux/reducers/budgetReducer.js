import { createSlice } from '@reduxjs/toolkit';

import getBudgetActions from '../actions/budgetActions/getBudgetActions';
import addBudgetActions from '../actions/budgetActions/addBudgetActions';
import editBudgetActions from '../actions/budgetActions/editBudgetActions';
import deleteBudgetActions from '../actions/budgetActions/deleteBudgetActions';

const budgetReducer = createSlice({
  name: 'budget',
  initialState: [],
  reducers: {
    getBudget: (_, { payload }) => payload,
    addBudget: (_, { payload }) => payload,
    editBudget: (_, { payload }) => payload,
    deleteBudget: () => [],
  },
});

export const { getBudget, addBudget, editBudget, deleteBudget } =
  budgetReducer.actions;

export default budgetReducer.reducer;
