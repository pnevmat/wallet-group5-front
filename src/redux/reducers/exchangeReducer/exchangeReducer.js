import { createSlice } from '@reduxjs/toolkit';

const exchangeReducer = createSlice({
  name: 'exchange',
  initialState: {},
  reducers: {
    getExchange: (state, { payload }) => payload,
  },
});

export const { getExchange } = exchangeReducer.actions;

export default exchangeReducer.reducer;
