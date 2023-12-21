import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userDataReducer from './reducers/registrationReducers/userDataReducer';
import registrationReducer from './reducers/registrationReducers/registrationReducer';
import authorisationReducer from './reducers/authorisationReducers/authorisationReducer';
import authReducer from './reducers/authorisationReducers/authReducer';
import authErrorReducer from './reducers/authorisationReducers/authErrorReducer';
import categoryReducer from './reducers/categoryReducer/categoryReducer';
import transactionReducer from './reducers/transactionReducer/transactionReducer';
import statisticsTransactionReducer from './reducers/statisticsTransactionReducer';
import isModalLogoutOpenReducer from './reducers/isModalLogoutOpenReducer';
import budgetReducer from './reducers/budgetReducer';

import logger from 'redux-logger';

const userTokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['registrationToken', 'authorisationToken'],
};

const store = configureStore(
  {
    reducer: {
      userData: combineReducers({
        registrationData: userDataReducer,
        authorisationData: userDataReducer,
        modalLogoutOpen: isModalLogoutOpenReducer,
      }),
      userToken: persistReducer(
        userTokenPersistConfig,
        combineReducers({
          registrationToken: registrationReducer,
          authorisationToken: authorisationReducer,
        }),
      ),
      session: combineReducers({
        isAuth: authReducer,
        error: authErrorReducer,
      }),

      category: categoryReducer,
      transactions: transactionReducer,
      statisticsTransactions: statisticsTransactionReducer,
      budget: budgetReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
  },
  process.env.NODE_ENV === 'development' && applyMiddleware(logger),
);

const persistor = persistStore(store);

export default { store, persistor };
