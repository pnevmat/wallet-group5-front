import axios from "axios";
import {
  fetchcategoryRequest,
    fetchcategorySuccess,
    fetchcategoryError,
    addTransactionRequest,
    addTransactionSuccess ,
    addTransactionError


  } from '../actions/categoryactions/categoryactions';


  
const fetchCategory = () => async (dispatch) => {
  dispatch(fetchcategoryRequest());

  try {
    const { data } = await axios.get("/api/users/category");
    dispatch(fetchcategorySuccess(data));
  } catch (error) {
    dispatch(fetchcategoryError(error.message));
  }
};




export default {
    fetchCategory,
   
  };