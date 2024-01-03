import {
  combineReducers,
  configureStore,
  createDynamicMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import regUserDataReducer from './reducers/registrationReducers/userDataReducer';
import authUserDataReducer from '../redux/reducers/authorisationReducers/userDataReducer';
import registrationReducer from './reducers/registrationReducers/registrationReducer';
import authorisationReducer from './reducers/authorisationReducers/authorisationReducer';
import authReducer from './reducers/authorisationReducers/authReducer';
import authErrorReducer from './reducers/authorisationReducers/authErrorReducer';
import exchangeReducer from './reducers/exchangeReducer/exchangeReducer';
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
const exchangePersistConfig = {
  key: 'exchange',
  storage,
  whitelist: ['rates'],
};
const dynamicMiddleware = createDynamicMiddleware();

const store = configureStore(
  {
    reducer: {
      userData: combineReducers({
        registrationData: regUserDataReducer,
        authorisationData: authUserDataReducer,
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

      exchange: persistReducer(
        exchangePersistConfig,
        combineReducers({ rates: exchangeReducer }),
      ),
      category: categoryReducer,
      transactions: transactionReducer,
      statisticsTransactions: statisticsTransactionReducer,
      budget: budgetReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).prepend(dynamicMiddleware.middleware),
    devTools: process.env.NODE_ENV === 'development',
  },
  process.env.NODE_ENV === 'development' &&
    dynamicMiddleware.addMiddleware(logger),
);

const persistor = persistStore(store);

export default { store, persistor };
