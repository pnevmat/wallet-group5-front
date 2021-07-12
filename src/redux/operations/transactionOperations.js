import axios from "axios";
import {
  fetchTransactionRequest,
    fetchTransactionSuccess,
    fetchTransactionError,
    addTransactionRequest,
    addTransactionSuccess ,
    addTransactionError,


  } from '../actions/transaction/transactionActions.js';

const fetchTransaction = () => async (dispatch) => {
    dispatch(fetchTransactionRequest());
  
    try {
      const { data } = await axios.get("/api/transactions");
      dispatch( fetchTransactionSuccess(data));
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