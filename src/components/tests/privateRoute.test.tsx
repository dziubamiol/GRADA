import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import PrivateRoute from '../PrivateRoute';


const PrivateRouteTest = ({isAuth, history}: { isAuth: boolean; history: MemoryHistory }) => {
    return (
        <Router
            history={history}
        >
            <Switch>
                <Route
                    exact
                    path='/'
                >
                    Index route
                </Route>
                <PrivateRoute
                    redirectPath='/'
                    isAuthenticated={isAuth}
                    path='/private'
                >
                    Private route
                </PrivateRoute>
            </Switch>
        </Router>
    );
};


let container: null | HTMLElement = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});


afterEach(() => {
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});


describe('PrivateRoute check', () => {
    it('When user is not authenticated', () => {
        const history = createMemoryHistory();
        history.push('/private');

        act(() => {
            render(
                <PrivateRouteTest
                    history={history}
                    isAuth={false}
                />,
                container
            );
        });

        expect(container && container.innerHTML).toBe('Root route');
    });

    it('When user is authenticated', () => {
        const history = createMemoryHistory();
        history.push('/private');

        act(() => {
            render(
                <PrivateRouteTest
                    history={history}
                    isAuth={true}
                />,
                container
            );
        });

        expect(container && container.innerHTML).toBe('Private route');
    });
});
