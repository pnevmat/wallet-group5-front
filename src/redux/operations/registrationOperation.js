import axios from "axios";
import registrationAction from '../actions/registrationActions/registrationAction';

import BASE_URL from '../../utils/baseUrl'

axios.defaults.baseURL = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const registerOperation = userData => async dispatch => {
    dispatch(registrationAction.registrationRequest());
    try {
        const response = await axios.post('/api/users/register', userData);
        
        // token.set(response.data.token);

        dispatch(registrationAction.registrationSuccess(response.data));
    }catch(error) {
        dispatch(registrationAction.registrationError(error.message));
    };
};

export default registerOperation;