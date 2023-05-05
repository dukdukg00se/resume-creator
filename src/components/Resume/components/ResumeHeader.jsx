import React from 'react';

class ResumeHeader extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h1>{this.props.personal.name}</h1>
          <h2>{this.props.personal.title}</h2>
        </div>
        <div>
          <ul>
            <li>{this.props.personal.address}</li>
            <li>{this.props.personal.email}</li>
            <li>{this.props.personal.phone}</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default ResumeHeader;
