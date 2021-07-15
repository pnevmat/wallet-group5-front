import { createReducer } from "@reduxjs/toolkit";
import {
    
    fetchcategorySuccess,

  } from "../../actions/categoryactions/categoryactions.js";

  const categoryReducer = createReducer([], {
    [ fetchcategorySuccess]: (_, { payload }) => payload,
   
  });

 

  export default { categoryReducer };