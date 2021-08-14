import axios from "axios";
import {
  fetchTransactionRequest,
    fetchTransactionSuccess,
    fetchTransactionError,
    addTransactionRequest,
    addTransactionSuccess ,
    addTransactionError,
    deleteTransactionRequest,
    deleteTransactionSuccess,
    deleteTransactionError,

  } from '../actions/transaction/transactionActions.js';

  const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const fetchTransaction = (userToken) => async (dispatch) => {
    dispatch(fetchTransactionRequest());
  
    try {
      token.set(userToken);
      const { data } = await axios.get("/api/transactions");
      dispatch( fetchTransactionSuccess(data.data.transactions));
    } catch (error) {
      dispatch( fetchTransactionError(error.message));
    }
  };
  
  const addTransaction = (transaction) => async (dispatch) => {
    dispatch(addTransactionRequest());
  
    try {
      const { data } = await axios.post("/api/transactions/add", transaction);
      dispatch( addTransactionSuccess(data));
    } catch (error) {
      dispatch(addTransactionError(error.message));
    }
  };
   
  const deleteTransaction = (transacionId) => async (dispatch) => {
    dispatch( deleteTransactionRequest());
  
    try {
      await axios.delete(`/api/transactions/${transacionId}`);
      dispatch(deleteTransactionSuccess(transacionId));
    } catch (error) {
      dispatch(deleteTransactionError(error.message));
    }
  };







  export default {fetchTransaction, addTransaction, deleteTransaction}