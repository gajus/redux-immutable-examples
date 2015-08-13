import {
    createStore,
    applyMiddleware
} from 'redux';

import {
     combineReducers
} from 'redux-immutable';

import thunk from 'redux-thunk';

import * as reducers from './reducers';

import Immutable from 'immutable';

let reducer,
    store,
    state = {};

state.tasks = [
    {
        name: 'a',
        done: false
    },
    {
        name: 'c',
        done: false
    },
    {
        name: 'c',
        done: false
    }
];

reducer = combineReducers(reducers);
store = applyMiddleware(thunk)(createStore)(reducer, Immutable.fromJS(state));

export default store;
