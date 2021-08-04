import axios from "axios";
import registrationAction from '../actions/registrationAction';

import BASE_URL from '../../utils/baseUrl'

axios.defaults.baseURL = BASE_URL;

const registerOperation = userData => async dispatch => {
    dispatch(registrationAction.registrationRequest());

    try {
        const response = await axios.post('/api/users/register', userData);
        
        if (response) {
            dispatch(registrationAction.registrationSuccess(response.data));
        } else {
            dispatch(registrationAction.registrationError(response.message));
        }
    } catch(error) {
        dispatch(registrationAction.registrationError(error));
    }
};

export default registerOperation;