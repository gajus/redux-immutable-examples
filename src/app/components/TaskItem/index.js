import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {
  static propTypes = {
    done: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string.isRequired,
    onTaskDone: React.PropTypes.func.isRequired,
    onTaskUndone: React.PropTypes.func.isRequired
  };

  handleToggleStatus = () => {
    const {
      id,
      done,
      onTaskDone,
      onTaskUndone
    } = this.props;

    if (done) {
      onTaskUndone(id);
    } else {
      onTaskDone(id);
    }
  };

  render () {
    const {
      name,
      done
    } = this.props;

    const componentClassName = classNames('component-todo-item', {
      'status-done': done
    });

    return <div className={componentClassName}>
      <span className='name'>{name}</span>
      <div className='toggle-status' onClick={this.handleToggleStatus} />
    </div>;
  }
}
