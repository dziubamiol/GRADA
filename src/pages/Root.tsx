import React from 'react';
import Home from './Home';
import Login from './Login';
import { ValidateSession } from '../API/Session';


export default function Root () {
    const isAuthenticated = ValidateSession();

    return (
        isAuthenticated ? <Home/> : <Login/>
    );
}
