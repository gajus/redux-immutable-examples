import {
    createSelector
} from 'reselect';

import Immutable from 'immutable';

let taskSelector,
    doneTaskSelector;

taskSelector = state => state.get('tasks');

doneTaskSelector = createSelector([taskSelector], tasks => tasks.filter(task => task.get('done')));

export default (state) => {
    return {
        tasks: taskSelector(state),
        taskCount: taskSelector(state).count(),
        doneTaskCount: doneTaskSelector(state).count()
    };
};
