import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import registrationReducers from './reducers/registrationReducers';
import authorisationReducers from './reducers/authorisationReducer';
import categoryReducer from './reducers/categoryReducer/categoryReducer';
import transactionReducer from './reducers/transactionReducer/transactionReducer';
import statisticsTransactionReducer from './reducers/statisticsTransactionReducer';

import logger from 'redux-logger';


const userTokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: 'userToken',
};

const store = configureStore({
  reducer: {
    userData: combineReducers({
      registrationData: registrationReducers.userDataReducer,
      authorisationData: authorisationReducers.userDataReducer,
    }),
    userToken: persistReducer(
      userTokenPersistConfig,
      combineReducers({
        registrationToken: registrationReducers.registrationReducer,
        authorisationToken: authorisationReducers.authorisationReducer,
      }),
    ),
    session: combineReducers({
      isAuth: authorisationReducers.authReducer,
      error: authorisationReducers.authErrorReducer,
    }),

    category: categoryReducer.categoryReducer,

    transactions: transactionReducer.transactionReducer,

    statisticsTransactions: statisticsTransactionReducer.statisticsTransactionReducer

  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
