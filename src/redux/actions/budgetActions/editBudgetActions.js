import {createAction} from '@reduxjs/toolkit';

const editBudgetRequest = createAction('budget/editBudgetRequest');
const editBudgetSuccess = createAction('budget/editBudgetSuccess');
const editBudgetError = createAction('budget/editBudgetError');


export default {editBudgetRequest, editBudgetSuccess, editBudgetError};