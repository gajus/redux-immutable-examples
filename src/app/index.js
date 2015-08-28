/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {
    Provider
} from 'react-redux';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        {() => <App />}
    </Provider>, document.getElementById('app'));
