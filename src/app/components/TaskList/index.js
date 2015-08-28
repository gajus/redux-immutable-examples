import React from 'react';
import TaskItem from './../TaskItem';
import Immutable from 'immutable';

export default class extends React.Component {
    static propTypes = {
        tasks: React.PropTypes.instanceOf(Immutable.List).isRequired
    };

    render () {
        let onTaskDone,
            onTaskUndone,
            tasks;

        ({
            tasks,
            onTaskDone,
            onTaskUndone
        } = this.props);

        return <ul>{tasks.map((task) =>
            <li key={task.get('id')}>
                <TaskItem
                    id={task.get('id')}
                    name={task.get('name')}
                    done={task.get('done')}
                    onTaskDone={onTaskDone}
                    onTaskUndone={onTaskUndone}
                />
            </li>)}
        </ul>;
    }
}
