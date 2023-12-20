import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import registrationSelectors from '../redux/selectors/registrationSelectors';
import authorisationSelectors from '../redux/selectors/authorisationSelectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const authorisation = useSelector(authorisationSelectors.getIsAuthorisation);
  // const registration = useSelector(registrationSelectors.getSessionErrorStatus);

  return (
    <Route
      {...routeProps}
      render={props =>
        authorisation && routeProps.restricted ? (
          <Navigate to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
