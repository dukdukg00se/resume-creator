import React from 'react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Position"
          value={this.props.position}
        ></input>
        <input
          type="text"
          placeholder="Company"
          value={this.props.company}
        ></input>
        <input type="text" placeholder="City" value={this.props.city}></input>
        <input type="text" placeholder="From" value={this.props.from}></input>
        <input type="text" placeholder="To" value={this.props.to}></input>
        <textarea placeholder="Responsibilities"></textarea>
      </div>
    );
  }
}

export default Experience;
