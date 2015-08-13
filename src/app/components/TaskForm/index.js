import React from 'react';

export default class extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.refs.name.value);
    };

    render () {
        let {
            name
        } = this.props;

        return <form onSubmit={this.handleSubmit}>
            <input type='text' ref='name' />
            <button type='submit'>Save</button>
        </form>;
    }
}
