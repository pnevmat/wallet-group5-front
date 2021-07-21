import axios from "axios";
import limitedStatisticsActions from '../actions/limitedStatisticsActions';

import BASE_URL from '../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const limitedStatisticsOperation = (userToken, transactionData) => async dispatch => {
    dispatch(limitedStatisticsActions.limitedStatisticsRequest());
    try {
        token.set(userToken);
        console.log('Object received from form: ', transactionData);
        const response = await axios.post('/api/transactions/statistics', transactionData);
        console.log('Response from backend: ', response);
        // dispatch(limitedStatisticsActions.limitedStatisticsSuccess(response.data));
    }catch(error) {
        dispatch(limitedStatisticsActions.limitedStatisticsError(error));
    };
};

export default limitedStatisticsOperation;