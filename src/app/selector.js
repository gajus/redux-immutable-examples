import {
    createSelectorCreator
} from 'reselect';

import Immutable from 'immutable';

let immutableCreateSelector,
    taskSelector,
    doneTaskSelector;

immutableCreateSelector = createSelectorCreator(Immutable.is);

taskSelector = state => state.get('tasks');

doneTaskSelector = immutableCreateSelector([taskSelector], tasks => tasks.filter(task => task.get('done')));

export default (state) => {
    return {
        tasks: taskSelector(state),
        taskCount: taskSelector(state).count(),
        doneTaskCount: doneTaskSelector(state).count()
    };
};
