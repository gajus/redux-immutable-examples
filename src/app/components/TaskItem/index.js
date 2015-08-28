import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        done: React.PropTypes.bool.isRequired,
        onTaskDone: React.PropTypes.func.isRequired,
        onTaskUndone: React.PropTypes.func.isRequired
    };

    handleToggleStatus = () => {
        let done,
            id,
            onTaskDone,
            onTaskUndone;

        ({
            id,
            done,
            onTaskDone,
            onTaskUndone
        } = this.props);

        if (done) {
            onTaskUndone(id);
        } else {
            onTaskDone(id);
        }
    };

    render () {
        let componentClassName,
            done,
            name;

        ({
            name,
            done
        } = this.props);

        componentClassName = classNames('component-todo-item', {
            'status-done': done
        });

        return <div className={componentClassName}>
            <span className='name'>{name}</span>
            <div className='toggle-status' onClick={this.handleToggleStatus}></div>
        </div>;
    }
}
