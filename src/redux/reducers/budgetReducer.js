import { createSlice } from '@reduxjs/toolkit';

const budgetReducer = createSlice({
  name: 'budget',
  initialState: {},
  reducers: {
    getBudget: (_, { payload }) => payload,
    addBudget: (_, { payload }) => payload,
    editBudget: (_, { payload }) => payload,
    deleteBudget: (state, _) => (state = {}),
  },
});

export const { getBudget, addBudget, editBudget, deleteBudget } =
  budgetReducer.actions;

export default budgetReducer.reducer;
