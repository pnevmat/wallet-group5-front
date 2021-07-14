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
  


export const addTransactionRequest = createAction("addTransactionRequest");
export const addTransactionSuccess = createAction("addTransactionSuccess");
export const addTransactionError = createAction(" addTransactionError");