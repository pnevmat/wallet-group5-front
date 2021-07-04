import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

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

const mapStateToProps = state => ({
    authorisation: selectors.authorisation(state)
})

export default connect(mapStateToProps)(PrivateRoute);