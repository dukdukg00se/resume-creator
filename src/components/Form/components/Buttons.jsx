import React from 'react';

class Add extends React.Component {
  render() {
    return (
      <button type="button" name="add" onClick={this.props.onClick}>
        Add
      </button>
    );
  }
}

class Clear extends React.Component {
  render() {
    return (
      <button type="button" name="clear" onClick={this.props.onClick}>
        Clear
      </button>
    );
  }
}

class Delete extends React.Component {
  render() {
    return (
      <button type="button" name="delete" onClick={this.props.onClick}>
        Delete
      </button>
    );
  }
}

export { Add, Clear, Delete };
