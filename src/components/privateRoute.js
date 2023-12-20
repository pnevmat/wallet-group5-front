import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Navigate} from 'react-router-dom';
import selectors from '../redux/selectors/authorisationSelectors';

const PrivateRoute = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {

    const authorisation = useSelector(selectors.getIsAuthorisation);
    
    return (
        <Route 
            {...routeProps}
            render={props => authorisation ? <Component {...props} /> : <Navigate to={redirectTo} />}
        />
    );
};

export default PrivateRoute;