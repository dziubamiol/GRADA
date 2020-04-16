import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';
import { useSelector } from 'react-redux';
import { IRoot } from '../reducers/root';


export default function Root () {
    const isAuth = useSelector((state: IRoot) => state.auth);

    return (
        isAuth ? <Home/> : <Login/>
    );
}
