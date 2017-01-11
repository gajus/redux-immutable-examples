import React from 'react';
import Immutable from 'immutable';
import TaskItem from '../TaskItem';

export default class extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.instanceOf(Immutable.List).isRequired
  };

  render () {
    const {
      tasks,
      onTaskDone,
      onTaskUndone
    } = this.props;

    return <ul>{tasks.map((task) => {
      return <li key={task.get('id')}>
        <TaskItem
          done={task.get('done')}
          id={task.get('id')}
          name={task.get('name')}
          onTaskDone={onTaskDone}
          onTaskUndone={onTaskUndone}
        />
      </li>;
    })}
    </ul>;
  }
}
