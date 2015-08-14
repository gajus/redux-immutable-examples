import _ from 'lodash';

import Immutable from 'immutable';

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {String} action.data.name
 */
export let TASK_ADD = (domain, action) => {
    return domain
        .push(Immutable.Map({
            id: _.uniqueId(),
            name: action.data.name,
            done: false
        }));
};

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {Number} action.data.id
 */
export let TASK_DONE = (domain, action) => {
    let i;

    i = domain.findIndex(item => item.get('id') === action.data.id);

    return domain.update(i, (task) => {
        return task.set('done', true);
    });
};

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {Number} action.data.id
 */
export let TASK_UNDONE = (domain, action) => {
    let i;

    i = domain.findIndex(item => item.get('id') === action.data.id);

    return domain.update(i, (task) => {
        return task.set('done', false);
    });
};
