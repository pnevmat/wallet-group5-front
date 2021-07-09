import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
// import registrationSelectors from '../redux/selectors/registrationSelectors/registrationSelectors';
import authorisationSelectors from '../redux/selectors/authorisationSelectors/authorisationSelectors';

const PublicRoute = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {

    const authorisation = useSelector(authorisationSelectors.authorisation);
    // const registration = useSelector(registrationSelectors.getSessionErrorStatus);

    return (
        <Route 
            {...routeProps}
            render={props => authorisation && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />}
        />
    );
};

export default PublicRoute;