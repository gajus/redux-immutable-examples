import React from 'react';
import {
  connect
} from 'react-redux';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskStats from '../components/TaskStats';
import selector from '../selector';
import {
  taskAdd,
  taskDone,
  taskUndone
} from '../actions';
import './style.css';

class App extends React.Component {
  handleTaskAdd = (name) => {
    this.props.dispatch(taskAdd(name));
  };

  handleTaskDone = (id) => {
    this.props.dispatch(taskDone(id));
  };

  handleTaskUndone = (id) => {
    this.props.dispatch(taskUndone(id));
  };

  render () {
    const {
      tasks,
      taskCount,
      doneTaskCount
    } = this.props;

    return <div id='viewport'>
      <TaskForm
        onSave={this.handleTaskAdd}
      />
      <TaskList
        onTaskDone={this.handleTaskDone}
        onTaskUndone={this.handleTaskUndone}
        tasks={tasks}
      />
      <TaskStats
        taskCount={taskCount}
        undoneTaskCount={taskCount - doneTaskCount}
      />
    </div>;
  }
}

export default connect(selector)(App);
