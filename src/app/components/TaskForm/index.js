import React from 'react';

export default class extends React.Component {
    static propTypes = {
        onSave: React.PropTypes.func.isRequired
    };

    handleSubmit = (e) => {
        let name;

        e.preventDefault();

        name = this.refs.name.value;

        this.refs.name.value = '';

        this.props.onSave(name);
    };

    render () {
        let {
            name
        } = this.props;

        return <form className='component-task-form' onSubmit={this.handleSubmit}>
            <input type='text' ref='name' />
            <button type='submit'>Save</button>
        </form>;
    }
}
