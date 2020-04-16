import { IAuth } from './auth';
import { combineReducers } from 'redux';
import auth from './auth';

export interface IRoot {
    auth: IAuth; // todo move to automatic merge from combineReducers
}

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
