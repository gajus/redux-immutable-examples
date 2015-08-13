import React from 'react';
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
    handleTaskAdd = () => {
        console.log('handleTaskAdd');
    };

    handleTaskComplete = () => {
        console.log('handleTaskComplete');
    };

    render () {
        let {
            tasks
        } = this.props;

        return <div>
            <TaskList
                tasks={tasks}
                onTaskAdd={this.handleTaskAdd}
                onTaskComplete={this.handleTaskComplete}
            />
        </div>;
    }
}

export default connect(selector)(App);
