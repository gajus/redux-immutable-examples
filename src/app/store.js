import {
    createStore,
    applyMiddleware
} from 'redux';

import {
     combineReducers
} from 'redux-immutable';

import thunk from 'redux-thunk';
import logger from './middleware/logger';

import * as reducers from './reducers';

import Immutable from 'immutable';

import _ from 'lodash';

let reducer,
    state,
    store;

reducer = combineReducers(reducers);

state = Immutable.Map({});
state = reducer(state, {
    name: `CONSTRUCT`
});

store = applyMiddleware(thunk, logger)(createStore)(reducer, state);

export default store;
