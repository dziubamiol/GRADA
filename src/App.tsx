import React, { useEffect } from 'react';

import IRoute from './interfaces/route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import PrivateRoute from './components/PrivateRoute';

import Root from './pages/Root';
import Login from './pages/Login';
import Join from './pages/Join';
import Settings from './pages/Settings';

import { connect } from 'react-redux';

import mainTheme from './styles/jss/mainTheme';
import { IRoot } from './reducers/root';
import { checkAuth } from './actions/auth';

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
        path: '/join',
        component: Join
    },
    {
        path: '/settings',
        component: Settings,
        redirectPath: '/',
    }
];

export interface IAppProps {
    isAuth: boolean;
    checkAuth: () => void;
}

function App (props: IAppProps) {
    const {checkAuth, isAuth} = props;

    const theme = {
        color: '#00e5ff',
        ...mainTheme
    };

    useEffect(() => {
        checkAuth();
    }, [checkAuth])

    const routing = routes.map((el, i) =>
        el.redirectPath ?
            <PrivateRoute
                path={el.path}
                redirectPath={el.redirectPath}
                isAuthenticated={isAuth}
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
}

const mapStateToProps = (state: IRoot) => {
    return {
        isAuth: state.auth
    }
};

const mapDispatchToProps = (dispatch: any) => { // resolve type later
    return {
        checkAuth: () => { // showed as unused but it used in useEffect on App component mount
            dispatch(checkAuth());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
