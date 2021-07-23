import axios from 'axios';
import logoutActions from '../actions/logoutActions';

import BASE_URL from '../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logoutOperation = () => async dispatch => {
  dispatch(logoutActions.logoutRequest());

  try {
    const response = await axios.post('/api/users/logout');
    token.unset();
    dispatch(logoutActions.logoutSuccess(response.data));
  } catch (error) {
    dispatch(logoutActions.logoutError(error));
  }
};

export default logoutOperation;
