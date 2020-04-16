import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

console.log(store.getState());

export default store;
