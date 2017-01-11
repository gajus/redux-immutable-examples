import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  combineReducers
} from 'redux-immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import reducers from './reducers';

const logger = createLogger();

const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  Immutable.Map({}),
  applyMiddleware(thunk, logger)
);

export default store;
