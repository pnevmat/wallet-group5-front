import axios from "axios";
import {
  fetchcategoryRequest,
    fetchcategorySuccess,
    fetchcategoryError,


  } from '../actions/categoryactions/categoryactions';

  const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};
  
const fetchCategory = ( userToken) => async (dispatch) => {
  dispatch(fetchcategoryRequest());
 
    try {
      token.set(userToken);
      console.log(userToken)
      const { data } = await axios.get("/api/users/category");
      console.log(data)
  
      dispatch(fetchcategorySuccess(data.user.categories));
      
      
    } catch (error) {
      dispatch(fetchcategoryError(error.message));
    }

    
};

// const fetchCategory = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) {
//     return;
//   }
//   token.set(persistedToken);
//   dispatch(fetchcategoryRequest());
//   try {
//     const { data } =  await axios.get("/api/users/category");
//     dispatch(fetchcategorySuccess(data));
//   } catch (error) {
//     dispatch(fetchcategoryError(error.message));
//   }
// };



export default {
    fetchCategory,
  };