import { createSlice } from '@reduxjs/toolkit';

import registrationActions from '../../actions/registrationAction';
import loginActions from '../../actions/loginActions';
import logoutActions from '../../actions/logoutActions';
import limitedStatisticsActions from '../../actions/limitedStatisticsActions';
import getUserDataActions from '../../actions/getUserDataActions';
import cleaningActions from '../../actions/errorCleaningActions';

const authorisationInitialState = {};

const authorisationReducer = createSlice({
  name: 'authorisation',
  initialState: authorisationInitialState,
  reducers: {
    login: (state, { payload }) => payload.token,
    logout: () => null,
  },
});

export const { login, logout } = authorisationReducer.actions;

export default authorisationReducer.reducer;
