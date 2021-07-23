import axios from "axios";
import getUserDataActions from '../actions/getUserDataActions';

import BASE_URL from '../../utils/baseUrl';

axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const getUserDataOperation = () => async (dispatch, getState) => {
    const {
        userToken
    } = getState();
    dispatch(getUserDataActions.getUserDataRequest());

    if (typeof userToken.registrationToken === 'string') {
        console.log('Registration token was set: ', userToken.registrationToken);
        token.set(userToken.registrationToken);
    } else if (typeof userToken.authorisationToken === 'string') {
        console.log('Authorisation token was set: ', userToken.authorisationToken);
        token.set(userToken.authorisationToken);
    } else {
        return;
    };

    try {
        const response = await axios.get('api/users/getUserData');
        console.log('Response from getUserData: ', response);

        dispatch(getUserDataActions.getUserDataSuccess(response.data));
    } catch(error) {
        dispatch(getUserDataActions.getUserDataError(error.message));
    };
};

export default getUserDataOperation;