import React from 'react';
import { isAuthenticated } from '../_helper/auth'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' {...props} />
        )} />
    );
};

export default PrivateRoutes;