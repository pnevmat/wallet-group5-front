import axios from 'axios';
import addBudgetActions from '../../actions/budgetActions/addBudgetActions';

import BASE_URL from '../../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const addBudgetOperation = budget => async dispatch => {
  dispatch(addBudgetActions.addBudgetRequest());
  try {
    // token.set(userToken);

    const response = await axios.post('/api/budgets/add', budget);

    dispatch(addBudgetActions.addBudgetSuccess(response.data));
  } catch (error) {
    dispatch(addBudgetActions.addBudgetError(error));
  }
};

export default addBudgetOperation;
