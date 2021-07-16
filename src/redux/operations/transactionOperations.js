import axios from "axios";
import {
  fetchTransactionRequest,
    fetchTransactionSuccess,
    fetchTransactionError,
    addTransactionRequest,
    addTransactionSuccess ,
    addTransactionError,


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
      dispatch( fetchTransactionSuccess(data.data));
      console.log(data)
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
  

  export default {fetchTransaction, addTransaction}