import React from 'react';
import { Route, RouteProps, useLocation } from 'react-router-dom';
import IRoute from './../interfaces/route';

// overriding component and path, we dont need original because of another logic for SubRoutes
interface ISubRoutes extends IRoute, Omit<RouteProps, 'component' | 'path'> {
}

function SubRoutes (props: ISubRoutes) {
    const {path, routes, component, ...rest} = props;

    console.log(props);

    const Component = component;
    const location = useLocation();
    console.log(location.pathname);
    // now I'm not passing any routeProps, if necessary could be changed to <Route render={...} />
    return (
        <Route
            path={path}
            {...rest}
            exact
            render={props => <Component routes={routes} {...props}/>}
        >
        </Route>
    );
}

export default SubRoutes;
