import axios from "axios";
import statisticsActions from '../actions/statisticsActions';

import BASE_URL from '../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const statisticsOperation = userToken => async dispatch => {
    dispatch(statisticsActions.statisticsRequest());
    try {
        token.set(userToken);

        const response = await axios.get('/api/transactions/all-statistics');

        dispatch(statisticsActions.statisticsSuccess(response.data));
    }catch(error) {
        dispatch(statisticsActions.statisticsError(error));
    };
};

export default statisticsOperation;