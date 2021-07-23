import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';

import getUserDataOperation from './redux/operations/getUserDataOperation';

import routes from '../src/routes';
import Spinner from '../src/components/Spinner/Spinner';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-Page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/registrationPage' /* webpackChunkName: "Registration-Page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/loginPage' /* webpackChunkName: "Login-Page" */),
);
const DashboardPage = lazy(() =>
  import('./pages/dashboardPage' /* webpackChunkName: "Dashboard-Page" */),
);
const StatisticsPage = lazy(() =>
  import('./pages/statisticsPage' /* webpackChunkName: "Statistics-Page" */),
);

const FinanceApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataOperation());
    
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <section>
        <Switch>
          <PublicRoute
            exact
            path={routes.home}
            restricted
            component={HomePage}
            redirectTo="/dashboard"
          />
          <PublicRoute
            path="/register"
            restricted
            component={RegisterPage}
            redirectTo="/dashboard"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginPage}
            redirectTo="/dashboard"
          />
          <PrivateRoute
            path="/dashboard"
            restricted
            component={DashboardPage}
            redirectTo="/login"
          />
          <PrivateRoute
            path="/statistics"
            restricted
            component={StatisticsPage}
            redirectTo="/login"
          />
        </Switch>
      </section>
    </Suspense>
  );
};

export default FinanceApp;
