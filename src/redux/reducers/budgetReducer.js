import { createReducer } from '@reduxjs/toolkit';

import getBudgetActions from '../actions/budgetActions/getBudgetActions';
import addBudgetActions from '../actions/budgetActions/addBudgetActions';
import editBudgetActions from '../actions/budgetActions/editBudgetActions';
import deleteBudgetActions from '../actions/budgetActions/deleteBudgetActions';

const budgetReducer = createReducer([], {
  [getBudgetActions.getBudgetSuccess]: (_, { payload }) => payload,
  [addBudgetActions.addBudgetSuccess]: (_, { payload }) => payload,
  [editBudgetActions.editBudgetSuccess]: (_, { payload }) => payload,
  [deleteBudgetActions.deleteBudgetSuccess]: () => [],
});

export default { budgetReducer };