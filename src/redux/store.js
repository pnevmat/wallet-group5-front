import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import registrationReducers from './reducers/registrationReducer/registrationReducers';
import authorisationReducers from './reducers/authorisationReducer/authorisationReducer';
import logger from 'redux-logger';
import categoryReducer from './reducers/categoryReducer/categoryReducer';
import transactionReducer from './reducers/transactionReducer/transactionReducer';


const userTokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: 'userToken',
};

const store = configureStore({
  reducer: {
     userData: combineReducers({
      registrationData: registrationReducers.userDataReducer,
      authorisationData: authorisationReducers.userDataReducer
    }),
    userToken: persistReducer(
      userTokenPersistConfig,
      combineReducers({
        registrationToken: registrationReducers.registrationReducer,
        authorisationToken: authorisationReducers.authorisationReducer
      })
    ),
    session: combineReducers({
      isAuth: authorisationReducers.authReducer,
      error: authorisationReducers.authErrorReducer,
    }),
    categories:combineReducers({
      category: categoryReducer,
    
      
    }),
    transactions:combineReducers({
      transactions: transactionReducer,
    })

  },
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export default { store, persistor };
