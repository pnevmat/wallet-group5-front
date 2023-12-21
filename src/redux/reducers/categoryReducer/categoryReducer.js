import { createSlice } from '@reduxjs/toolkit';
import { fetchcategorySuccess } from '../../actions/categoryactions/categoryactions.js';

const categoryReducer = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    getCategories: (state, { payload }) => payload,
  },
});

export const { getCategories } = categoryReducer.actions;

export default categoryReducer.reducer;
