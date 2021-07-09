import axios from "axios";
import logoutActions from '../actions/logoutActions/logoutActions';

import BASE_URL from '../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

const logoutOperation = () => async dispatch => {
    dispatch(logoutActions.logoutRequest());

    try {
        const response = await axios.post('/api/users/logout');

        dispatch(logoutActions.logoutSuccess(response.data));
    }catch(error) {
        dispatch(logoutActions.logoutError(error.message));
    };
};

export default logoutOperation;