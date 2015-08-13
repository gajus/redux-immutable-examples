import React from 'react';
import TaskForm from './../components/TaskForm';
import TaskList from './../components/TaskList';
import selector from './../selector';

import {
    taskAdd,
    taskComplete
} from './../actions';

import {
    connect
} from 'react-redux';

class App extends React.Component {
    handleTaskAdd = (name) => {
        this.props.dispatch(taskAdd(name));
    };

    handleTaskComplete = (id) => {
        this.props.dispatch(taskComplete(id));
    };

    render () {
        let {
            tasks
        } = this.props;

        return <div>
            <TaskForm
                onSave={this.handleTaskAdd}
            />
            <TaskList
                tasks={tasks}
                onTaskComplete={this.handleTaskComplete}
            />
        </div>;
    }
}

export default connect(selector)(App);
