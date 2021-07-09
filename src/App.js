import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import AddTransactionButton from './components/addTransactionButton/AddTransactionButton'
import Navigation from './components/Navigation/Navigation';
import AppBar from '../src/components/AppBar/AppBar';
import routes from '../src/routes';
import Spinner from './Spinner';

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "Home-Page" */));
const RegisterPage = lazy(() => import('./pages/registrationPage' /* webpackChunkName: "Registration-Page" */));
const LoginPage = lazy(() => import('./pages/loginPage' /* webpackChunkName: "Login-Page" */));
const DashboardPage = lazy(() => import('./pages/dashboardPage' /* webpackChunkName: "Dashboard-Page" */));
const StatisticsPage = lazy(() => import('./pages/statisticsPage' /* webpackChunkName: "Statistics-Page" */))

const FinanceApp = () => {
    return (
        <Suspense fallback={<Spinner />} >
            <section>
                <Switch>
                    <Route exact path={routes.home} render={(props) => <HomePage {...props} />} />
                    <PublicRoute path='/register' restricted component={RegisterPage} redirectTo='/contacts' />
                    <PublicRoute path='/login' restricted component={LoginPage} redirectTo='/dashboard' />
                    <PrivateRoute path='/dashboard' restricted component={DashboardPage} redirectTo='/login' />
                    <PrivateRoute path='/statistics' restricted component={StatisticsPage} redirectTo='/login' />
                </Switch>
                <AddTransactionButton/>
            </section>
        </Suspense>
    );
};

export default FinanceApp;
