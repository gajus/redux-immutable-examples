import {
    createSelectorCreator
} from 'reselect';

import Immutable from 'immutable';

let immutableCreateSelector,
    taskSelector,
    completeTaskSelector,
    completeTaskCountSelector;

immutableCreateSelector = createSelectorCreator(Immutable.is);

taskSelector = state => state.get('tasks');

completeTaskSelector = immutableCreateSelector([taskSelector], tasks => tasks.filter(task => task.get('done')));

completeTaskCountSelector = immutableCreateSelector([completeTaskSelector], tasks => tasks.count())

export default (state) => {
    return {
        tasks: taskSelector(state),
        completeTaskCount: completeTaskCountSelector(state)
    };
};
