import axios from 'axios';
import { validate } from 'indicative/validator';

import BASE_URL from '../utils/baseUrl';
import validation from '../utils/validation/loginFormValidate';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

const api = {
  loginRequest: async userData => {
    validate(userData, validation.rules, validation.messages)
      .then(result => result)
      .catch(error => {
        const err = error[0];
        return err;
      });

    const response = await axios.post('/api/users/login', userData);

    if (response) {
      token.set(response.data.token);
    }
    console.log('Response in login request: ', response);
    return response.data;
  },
  getUserDataRequest: async userToken => {
    if (typeof userToken === 'string') {
      token.set(userToken);
    } else {
      return;
    }

    const response = await axios.get('api/users/getUserData');
    return response.data;
  },
  getTransactionsRequest: async userToken => {
    token.set(userToken);
    const response = await axios.get('/api/transactions');

    return response.data;
  },
};

export const { loginRequest, getUserDataRequest, getTransactionsRequest } = api;
