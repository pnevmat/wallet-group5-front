import {createAction} from '@reduxjs/toolkit';

const addBudgetRequest = createAction('budget/addBudgetRequest');
const addBudgetSuccess = createAction('budget/addBudgetSuccess');
const addBudgetError = createAction('budget/addBudgetError');


export default {addBudgetRequest, addBudgetSuccess, addBudgetError};