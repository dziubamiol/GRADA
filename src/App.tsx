import React from 'react';

import IRoute from './interfaces/route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import PrivateRoute from './components/PrivateRoute';

import Root from './pages/Root';
import Login from './pages/Login';
import Settings from './pages/Settings';
import { ValidateSession } from './API/Session';

import mainTheme from './styles/jss/mainTheme';

const routes: Array<IRoute> = [
    {
        path: '/',
        component: Root,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/settings',
        component: Settings,
        redirectPath: '/',
    }
];

export default function App () {
    const isAuthenticated = ValidateSession();

    const theme = {
        color: '#00e5ff',
        ...mainTheme
    };

    const routing = routes.map((el, i) =>
        el.redirectPath ?
            <PrivateRoute
                path={el.path}
                redirectPath={el.redirectPath}
                isAuthenticated={isAuthenticated}
                exact={true}
                key={i}
            >
                <el.component/>
            </PrivateRoute> :
            <Route
                path={el.path}
                exact={true}
                key={i}
            >
                <el.component/>
            </Route>);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    {routing}
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
