import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authorisationSelectors from '../redux/selectors/authorisationSelectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const authorisation = useSelector(authorisationSelectors.getIsAuthorisation);

  return <>{authorisation ? <Navigate to={redirectTo} /> : <Component />}</>;
};

export default PublicRoute;
