import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/registrationSelectors/registrationSelectors';

const PrivateRoute = ({
    component: Component,
    authorisation,
    redirectTo,
    ...routeProps
}) => (
    <Route 
        {...routeProps}
        render={props => authorisation ? <Component {...props} /> : <Redirect to={redirectTo} />}
    />
);

export default PrivateRoute;