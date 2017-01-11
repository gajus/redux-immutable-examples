import React from 'react';

export default class extends React.Component {
  static propTypes = {
    onSave: React.PropTypes.func.isRequired
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.textInput.value;

    this.textInput.value = '';

    this.props.onSave(name);
  };

  render () {
    return <form className='component-task-form' onSubmit={this.handleSubmit}>
      <input
        ref={(input) => {
          this.textInput = input;
        }}
        type='text'
      />
      <button type='submit'>Save</button>
    </form>;
  }
}
