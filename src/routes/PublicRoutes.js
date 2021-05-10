import React from 'react';
import { isAuthenticated } from '../_helper/auth'
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated() && restricted ? <Redirect to='/user' {...props} /> : <Component {...props} />
        )} />
    );
};

export default PublicRoutes;