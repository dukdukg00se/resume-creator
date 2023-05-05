import React from 'react';

class Add extends React.Component {
  render() {
    return <button type="button">Add</button>;
  }
}

class Clear extends React.Component {
  render() {
    return <button type="button">Clear</button>;
  }
}

class Delete extends React.Component {
  render() {
    return <button type="button">Delete</button>;
  }
}

export { Add, Clear, Delete };
