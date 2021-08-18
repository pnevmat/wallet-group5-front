import { createAction } from "@reduxjs/toolkit";


export const fetchTransactionRequest = createAction(
    "fetchTransactionRequest"
  );
  export const fetchTransactionSuccess = createAction(
    "fetchTransactionSuccess"
  );
  export const fetchTransactionError = createAction(
    "fetchTransactionError"
  );
  
  export const deleteTransactionRequest = createAction(
    "deleteTransactionRequest"
  );
  export const  deleteTransactionSuccess = createAction(
    "deleteTransactionSuccess"
  );
  export const  deleteTransactionError = createAction(
    "deleteTransactionError"
  );





export const addTransactionRequest = createAction("addTransactionRequest");
export const addTransactionSuccess = createAction("addTransactionSuccess");
export const addTransactionError = createAction(" addTransactionError");