import React from 'react';

export default class extends React.Component {
    static propTypes = {
        onSave: React.PropTypes.func.isRequired
    };

    handleSubmit = (event) => {
        let name;

        event.preventDefault();

        name = this.refs.name.value;

        this.refs.name.value = '';

        this.props.onSave(name);
    };

    render () {
        return <form className='component-task-form' onSubmit={this.handleSubmit}>
            <input type='text' ref='name' />
            <button type='submit'>Save</button>
        </form>;
    }
}
