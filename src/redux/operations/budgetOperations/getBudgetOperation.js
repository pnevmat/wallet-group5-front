import axios from "axios";
import getBudgetActions from '../../actions/budgetActions/getBudgetActions';

import BASE_URL from '../../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const getBudgetOperation = (date) => async dispatch => {
    dispatch(getBudgetActions.getBudgetRequest());
    try {
        // token.set(userToken);

        const response = await axios.get('/api/budgets', date);

        dispatch(getBudgetActions.getBudgetSuccess(response.data));
    }catch(error) {
        dispatch(getBudgetActions.getBudgetError(error));
    };
};

export default getBudgetOperation;