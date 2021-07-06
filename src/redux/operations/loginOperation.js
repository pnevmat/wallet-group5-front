// import axios from "axios";
import loginActions from '../actions/loginActions/loginActions';

import BASE_URL from '../../utils/baseUrl'

// axios.defaults.baseUrl = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const loginOperation = userData => async dispatch => {
    dispatch(loginActions.loginRequest());

    try {
        // const response = axios.post('', userData);

        // token.set(response.data.token);

        // dispatch(loginAction.loginSuccess());
    }catch(error) {
        dispatch(loginActions.loginError(error.message));
    };
};

export default loginOperation;