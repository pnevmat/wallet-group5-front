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
  registrationRequest: async regData => {
    const response = await axios.post('/api/users/register', regData);

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
  getCategoriesRequest: async userToken => {
    if (typeof userToken === 'string') {
      token.set(userToken);
    } else {
      return;
    }

    const { data } = await axios.get('/api/users/category');

    return data;
  },
  addCategoryRequest: async category => {
    const response = await axios.post('/api/users/category', category);

    return response.data;
  },
  editCategoryRequest: async category => {
    const { data } = await axios.put('/api/users/category', category);

    return data;
  },
  deleteCategoryRequest: async (email, categoryId) => {
    const { data } = await axios.delete(
      `/api/users/category?email=${email}&id=${categoryId}`,
    );

    return data;
  },
  getTransactionsRequest: async userToken => {
    token.set(userToken);
    const response = await axios.get('/api/transactions');

    return response.data;
  },
  addTransactionRequest: async transaction => {
    const response = await axios.post('/api/transactions/add', transaction);

    return response.data;
  },
  editTransactionRequest: async (transactionId, transaction) => {
    const response = await axios.put(
      `/api/transactions/${transactionId}`,
      transaction,
    );

    return response.data;
  },
  deleteTransactionRequest: async (userEmail, transacionId) => {
    const response = await axios.delete(
      `/api/transactions/${transacionId}?email=${userEmail}`,
    );

    return response.data;
  },
  getBudgetRequest: async date => {
    const response = await axios.get('/api/budgets', date);

    return response.data;
  },
};

export const {
  loginRequest,
  registrationRequest,
  getUserDataRequest,
  getCategoriesRequest,
  addCategoryRequest,
  editCategoryRequest,
  deleteCategoryRequest,
  getTransactionsRequest,
  addTransactionRequest,
  editTransactionRequest,
  deleteTransactionRequest,
  getBudgetRequest,
} = api;
