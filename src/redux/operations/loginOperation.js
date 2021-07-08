// import axios from "axios";
import loginActions from '../actions/loginActions/loginActions';
import { validate } from 'indicative/validator';

import BASE_URL from '../../utils/baseUrl';
import validation from '../../utils/validation/loginFormValidate';

// axios.defaults.baseUrl = BASE_URL;

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     }
// };

const loginOperation = userData => async dispatch => {
    dispatch(loginActions.loginRequest());

    try {
        validate(userData, validation.rules, validation.messages)
        .then(result => result)
        .catch(error => {
            console.log('Error', error);
            const err = error[0];
            dispatch(loginActions.loginError(err));
            return;
        });
        // const response = axios.post('', userData);

        // token.set(response.data.token);

        // dispatch(loginAction.loginSuccess());
    }catch(error) {
        dispatch(loginActions.loginError(error.message));
    };
};

export default loginOperation;