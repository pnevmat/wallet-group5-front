import {createAction} from '@reduxjs/toolkit';

const limitedStatisticsRequest = createAction('statistics/limitedStatisticsRequest');
const limitedStatisticsSuccess = createAction('statistics/limitedStatisticsSuccess');
const limitedStatisticsError = createAction('statistics/limitedStatisticsError');


export default {limitedStatisticsRequest, limitedStatisticsSuccess, limitedStatisticsError};