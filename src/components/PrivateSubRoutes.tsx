import React from 'react';
import PrivateRoute from './PrivateRoute';
import IRoute from './../interfaces/route';
import { RouteProps } from 'react-router-dom';

// overriding component and path, we dont need original because of another logic for SubRoutes
interface IPrivateSubRoute extends IRoute, Omit<RouteProps, 'component' | 'path'> {
    redirectPath: string;
    isAuthenticated: boolean;
}

const PrivateSubRoutes = (props: IPrivateSubRoute) => {
    const {isAuthenticated, redirectPath, path, routes, component, ...rest} = props;

    const Component = component;
    console.log(Component);

    return (
        <PrivateRoute
            redirectPath={redirectPath}
            isAuthenticated={isAuthenticated}
            path={path}
            exact={true}
            {...rest}
        >
            <Component routes={routes} isAuth={isAuthenticated}/>
        </PrivateRoute>
    );
};

export default PrivateSubRoutes;
