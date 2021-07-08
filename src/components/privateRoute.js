import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/authorisationSelectors/authorisationSelectors';

const PrivateRoute = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {

    const authorisation = useSelector(selectors.authorisation);
    
    return (
        <Route 
            {...routeProps}
            render={props => authorisation ? <Component {...props} /> : <Redirect to={redirectTo} />}
        />
    );
};

export default PrivateRoute;