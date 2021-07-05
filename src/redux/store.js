import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import registrationReducers from './reducers/registrationReducer/registrationReducers';

import logger from 'redux-logger';

const userTokenPersistConfig = {
    key: 'token',
    storage,
    whitelist: 'userToken'
}

const store = configureStore({
    reducer: {
        userData: registrationReducers.userDataReducer,
        userToken: persistReducer(userTokenPersistConfig, registrationReducers.registrationReducer),
        session: {isAuth: registrationReducers.authReducer, error: registrationReducers.authErrorReducer}
    },
    middleware: [
        ...getDefaultMiddleware(),
        logger
    ],
    devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export default {store, persistor};