import React from 'react';
import TaskItem from './../TaskItem';

export default class extends React.Component {
    render () {
        let {
            tasks
        } = this.props;

        return <ul>{tasks.map(task =>
            <li key={task.get('id')}>
                <TaskItem
                    name={task.get('name')}
                    done={task.get('done')}
                />
            </li>)}
        </ul>;
    }
}
