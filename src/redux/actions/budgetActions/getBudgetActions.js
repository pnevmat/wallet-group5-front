import {createAction} from '@reduxjs/toolkit';

const getBudgetRequest = createAction('budget/getBudgetRequest');
const getBudgetSuccess = createAction('budget/getBudgetSuccess');
const getBudgetError = createAction('budget/getBudgetError');


export default {getBudgetRequest, getBudgetSuccess, getBudgetError};