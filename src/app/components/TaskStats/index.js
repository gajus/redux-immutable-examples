import React from 'react';

export default class extends React.Component {
  static propTypes = {
    taskCount: React.PropTypes.number.isRequired,
    undoneTaskCount: React.PropTypes.number.isRequired
  };

  render () {
    const {
      taskCount,
      undoneTaskCount
    } = this.props;

    return <div className='component-task-stats'>
      <dl>
        <dt>Task count: </dt>
        <dd>{taskCount}</dd>

        <dt>Undone task count:</dt>
        <dd>{undoneTaskCount}</dd>
      </dl>
    </div>;
  }
}
