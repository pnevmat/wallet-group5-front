import axios from "axios";
import loginActions from '../actions/loginActions';
import { validate } from 'indicative/validator';

import BASE_URL from '../../utils/baseUrl';
import validation from '../../utils/validation/loginFormValidate';

axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const loginOperation = userData => async dispatch => {
    dispatch(loginActions.loginRequest());

    try {
        validate(userData, validation.rules, validation.messages)
        .then(result => result)
        .catch(error => {
            const err = error[0];
            dispatch(loginActions.loginError(err));
            return;
        });

        const response = await axios.post('/api/users/login', userData);

        if (response) {
            token.set(response.data.token);

            dispatch(loginActions.loginSuccess(response.data));
        } else {
            dispatch(loginActions.loginError(response));
        }

    }catch(error) {
        dispatch(loginActions.loginError(error));
    };
};

export default loginOperation;