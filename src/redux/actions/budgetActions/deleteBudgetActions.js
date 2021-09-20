import {createAction} from '@reduxjs/toolkit';

const deleteBudgetRequest = createAction('budget/deleteBudgetRequest');
const deleteBudgetSuccess = createAction('budget/deleteBudgetSuccess');
const deleteBudgetError = createAction('budget/deleteBudgetError');


export default {deleteBudgetRequest, deleteBudgetSuccess, deleteBudgetError};