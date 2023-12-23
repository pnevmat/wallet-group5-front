import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { getUserDataRequest } from './api/apiRequests';
import { getUserData } from './redux/reducers/authorisationReducers/userDataReducer';
import selectors from './redux/selectors/authorisationSelectors';

import routes from '../src/routes';
import Spinner from '../src/components/Spinner/Spinner';

const HomePage = lazy(
  () => import('./pages/HomePage' /* webpackChunkName: "Home-Page" */),
);
const RegisterPage = lazy(
  () =>
    import(
      './pages/RegistrationPage' /* webpackChunkName: "Registration-Page" */
    ),
);
const LoginPage = lazy(
  () => import('./pages/LoginPage' /* webpackChunkName: "Login-Page" */),
);
const DashboardPage = lazy(
  () =>
    import('./pages/DashboardPage' /* webpackChunkName: "Dashboard-Page" */),
);
const StatisticsPage = lazy(
  () =>
    import('./pages/StatisticsPage' /* webpackChunkName: "Statistics-Page" */),
);
const CurrencyPage = lazy(
  () => import('./pages/CurrencyPage' /* webpackChunkName: "Currency-Page" */),
);

const BudgetPage = lazy(
  () => import('./pages/BudgetPage' /* webpackChunkName: "Budget-Page" */),
);

const ReportsPage = lazy(
  () => import('./pages/ReportsPage' /* webpackChunkName: "Reports-Page" */),
);

const FinanceApp = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(selectors.getUserToken);

  useEffect(() => {
    const handleGetUserData = async () => {
      const response = await getUserDataRequest(userToken);
      if (response) {
        dispatch(getUserData(response));
      }
    };
    handleGetUserData();
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <section>
        <Routes>
          {/* {console.log('Route: ', <Route />)} */}
          <Route
            element={
              <PublicRoute component={HomePage} redirectTo="/dashboard" />
            }
            exact
            path={routes.home}
            restricted
          />
          <Route
            element={
              <PublicRoute component={RegisterPage} redirectTo="/dashboard" />
            }
            path="/register"
            restricted
          />
          <Route
            element={
              <PublicRoute component={LoginPage} redirectTo="/dashboard" />
            }
            path="/login"
            restricted
          />
          <Route
            element={
              <PrivateRoute component={DashboardPage} redirectTo="/login" />
            }
            path="/dashboard"
            restricted
          />
          <Route
            element={
              <PrivateRoute component={StatisticsPage} redirectTo="/login" />
            }
            path="/statistics"
            restricted
          />
          <Route
            element={
              <PrivateRoute component={CurrencyPage} redirectTo="/login" />
            }
            path="/currency"
            restricted
          />
          <Route
            element={
              <PrivateRoute component={BudgetPage} redirectTo="/login" />
            }
            path="/budget"
            restricted
          />
          <Route
            element={
              <PrivateRoute component={ReportsPage} redirectTo="/login" />
            }
            path="/reports"
            restricted
          />
        </Routes>
      </section>
    </Suspense>
  );
};

export default FinanceApp;
