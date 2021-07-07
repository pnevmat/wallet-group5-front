import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-Page" */),
);
const DiagramPage = lazy(() =>
  import('./pages/DiagramPage' /* webpackChunkName: "Diagram-Page" */),
);
const RegisterPage = lazy(() =>
  import(
    './pages/registrationPage' /* webpackChunkName: "Registration-Page" */
  ),
);
// const LoginPage = lazy(() => import('./pages/loginPage' /* webpackChunkName: "Login-Page" */));

const FinanceApp = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Загружаем...</p>}>
        <section>
          <Switch>
            <Route exact path={'/home'} component={HomePage}></Route>
            <Route exact path={'/diagram'} component={DiagramPage}></Route>
            <PublicRoute
              path="/register"
              restricted
              component={RegisterPage}
              redirectTo="/contacts"
            />
            {/* <PublicRoute path='/login' restricted component={LoginPage} redirectTo='/contacts' /> */}
            <Route component={HomePage}></Route>
          </Switch>
        </section>
      </Suspense>
    </>
  );
};

export default FinanceApp;
