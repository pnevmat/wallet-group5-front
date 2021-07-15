import {createAction} from '@reduxjs/toolkit';

const statisticsRequest = createAction('statistics/statisticsRequest');
const statisticsSuccess = createAction('statistics/statisticsSuccess');
const statisticsError = createAction('statistics/statisticsError');


export default {statisticsRequest, statisticsSuccess, statisticsError};