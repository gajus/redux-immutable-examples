import _ from 'lodash';

import Immutable from 'immutable';

/**
 * @param {Object} action
 * @param {String} action.data.name
 */
export let ADD_TASK = (state, action) => {
    return state
        .push(Immutable.Map({
            id: _.uniqueId(),
            name: action.data.name,
            done: false
        }));
};

/**
 * @param {Object} action
 * @param {Number} action.data.id
 */
export let COMPLETE_TASK = (state, action) => {
    let i = state.findIndex(item => item.get('id' === action.data.id));

    return state.update(i).set('done', true);
};
