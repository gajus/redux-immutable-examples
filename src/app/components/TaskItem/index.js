import React from 'react';

export default class extends React.Component {
    render () {
        let {
            name,
            done
        } = this.props;

        return <div className='component-todo-item'>
            {name} {done}
        </div>;
    }
}
