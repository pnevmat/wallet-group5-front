import React, {useEffect, lazy, Suspense} from 'react';
import { useDispatch } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';

// const HomePage = lazy(() => import('./pages/homePage' /* webpackChunkName: "Home-Page" */));
const RegisterPage = lazy(() => import('./pages/registrationPage' /* webpackChunkName: "Registration-Page" */));
const LoginPage = lazy(() => import('./pages/loginPage' /* webpackChunkName: "Login-Page" */));

const FinanceApp = () => {
    return (
        <Suspense fallback={<p>Загружаем...</p>} >
            <section>
                <Switch>
                    {/* <Route exact path='/' render={(props) => <HomePage {...props} />} /> */}
                    <PublicRoute path='/register' restricted component={RegisterPage} redirectTo='/contacts' />
                    <PublicRoute path='/login' restricted component={LoginPage} redirectTo='/contacts' />
                </Switch>
            </section>
        </Suspense>
    );
};

export default FinanceApp;