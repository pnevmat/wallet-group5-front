import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import getUserDataOperation from './redux/operations/getUserDataOperation';

import routes from '../src/routes';
import Spinner from '../src/components/Spinner/Spinner';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-Page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegistrationPage' /* webpackChunkName: "Registration-Page" */
  ),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "Login-Page" */),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: "Dashboard-Page" */),
);
const StatisticsPage = lazy(() =>
  import('./pages/StatisticsPage' /* webpackChunkName: "Statistics-Page" */),
);
const CurrencyPage = lazy(() =>
    import('./pages/CurrencyPage' /* webpackChunkName: "Currency-Page" */)
);

const BudgetPage = lazy(() =>
  import('./pages/BudgetPage' /* webpackChunkName: "Budget-Page" */),
);

const ReportsPage = lazy(() =>
  import('./pages/ReportsPage' /* webpackChunkName: "Reports-Page" */),
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
          <PrivateRoute
            path="/currency"
            restricted
            component={CurrencyPage}
            redirectTo="/login"
          />
          <PrivateRoute
            path="/budget"
            restricted
            component={BudgetPage}
            redirectTo="/login"
          />
          <PrivateRoute
            path="/reports"
            restricted
            component={ReportsPage}
            redirectTo="/login"
          />
        </Switch>
      </section>
    </Suspense>
  );
};

export default FinanceApp;
