import { createSlice } from '@reduxjs/toolkit';

const categoryReducer = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, { payload }) => (state = [...state, payload]),
    getCategories: (state, { payload }) => payload,
    editCategory: (state, { payload }) => {
      const newState = [
        ...state.filter(category => category.id !== payload.id),
        payload,
      ];

      return newState;
    },
    deleteCategory: (state, { payload }) => {
      const newState = [
        ...state.filter(category => category.id !== payload.id),
      ];

      return newState;
    },
  },
});

export const { addCategory, getCategories, editCategory, deleteCategory } =
  categoryReducer.actions;

export default categoryReducer.reducer;
