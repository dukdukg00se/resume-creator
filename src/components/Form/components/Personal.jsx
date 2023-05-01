import React from 'react';

class Personal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <input type="text" placeholder="Name" value=""></input>
        <input type="" placeholder="Title" value=""></input>
      </div>
    );
  }
}

export default Personal;
