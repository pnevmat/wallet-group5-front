// import axios from "axios";
import registrationAction from '../actions/registrationActions/registrationAction';

import BASE_URL from '../../utils/baseUrl'

// axios.defaults.baseUrl = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const registerOperation = userData => async dispatch => {
    dispatch(registrationAction.registrationRequest());

    try {
        // const response = axios.post('', userData);

        // token.set(response.data.token);

        // dispatch(registrationAction.registrationSuccess());
    }catch(error) {
        dispatch(registrationAction.registrationError(error.message));
    };
};

export default registerOperation;