import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/registrationSelectors/registrationSelectors';

const PublicRoute = ({
    component: Component,
    authorisation,
    redirectTo,
    ...routeProps
}) => (
    <Route 
        {...routeProps}
        render={props => authorisation && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />}
    />
);

export default PublicRoute;