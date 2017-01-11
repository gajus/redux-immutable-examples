import _ from 'lodash';
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS([
  {
    done: true,
    id: _.uniqueId(),
    name: 'foo'
  },
  {
    done: false,
    id: _.uniqueId(),
    name: 'bar'
  },
  {
    done: false,
    id: _.uniqueId(),
    name: 'baz'
  },
  {
    done: false,
    id: _.uniqueId(),
    name: 'quux'
  }
]);

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {string} action.data.name
 * @returns {Immutable.List}
 */
const TASK_ADD = (domain, action) => {
  return domain
    .push(Immutable.Map({
      done: false,
      id: _.uniqueId(),
      name: action.data.name
    }));
};

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {number} action.data.id
 * @returns {Immutable.List}
 */
const TASK_DONE = (domain, action) => {
  const index = domain.findIndex((item) => {
    return item.get('id') === action.data.id;
  });

  return domain
    .update(index, (task) => {
      return task.set('done', true);
    });
};

/**
 * @param {Immutable.List} domain
 * @param {Object} action
 * @param {number} action.data.id
 * @returns {Immutable.List}
 */
const TASK_UNDONE = (domain, action) => {
  const index = domain
    .findIndex((item) => {
      return item.get('id') === action.data.id;
    });

  return domain
    .update(index, (task) => {
      return task.set('done', false);
    });
};

export default createReducer(initialState, {
  TASK_ADD,
  TASK_DONE,
  TASK_UNDONE
});
