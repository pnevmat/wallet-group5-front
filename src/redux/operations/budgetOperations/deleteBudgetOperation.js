import axios from "axios";
import editBudgetActions from '../../actions/budgetActions/editBudgetActions';

import BASE_URL from '../../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const deleteBudgetOperation = (budgetId) => async dispatch => {
    dispatch(editBudgetActions.editBudgetRequest());
    try {
        // token.set(userToken);

        const response = await axios.delete(`/api/budgets/${budgetId}`);

        dispatch(editBudgetActions.editBudgetSuccess(response.data));
    }catch(error) {
        dispatch(editBudgetActions.editBudgetError(error));
    };
};

export default deleteBudgetOperation;