import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import registrationReducers from './reducers/registrationReducer/registrationReducers';
import authorisationReducers from './reducers/authorisationReducer/authorisationReducer';

import logger from 'redux-logger';

const userTokenPersistConfig = {
    key: 'token',
    storage,
    whitelist: 'userToken'
}

const store = configureStore({
    reducer: {
        userData: combineReducers({
            data: registrationReducers.userDataReducer,
            data: authorisationReducers.userDataReducer
        }),
        userToken: persistReducer(
            userTokenPersistConfig,
            registrationReducers.registrationReducer,
            authorisationReducers.authorisationReducer
        ),
        session: combineReducers({
            isAuth: authorisationReducers.authReducer,
            error: authorisationReducers.authErrorReducer
        })
    },
    middleware: [
        ...getDefaultMiddleware(),
        logger
    ],
    devTools: process.env.NODE_ENV === 'development'
});

const persistor = persistStore(store);

export default {store, persistor};