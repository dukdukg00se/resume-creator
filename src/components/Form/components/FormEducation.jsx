import React from 'react';

class FormEducation extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Degree"
          value={this.props.degree}
        ></input>
        <input type="text" placeholder="Major" value={this.props.major}></input>
        <input
          type="text"
          placeholder="University"
          value={this.props.university}
        ></input>
        <input type="text" placeholder="From" value={this.props.from}></input>
        <input type="text" placeholder="To" value={this.props.to}></input>
        <textarea placeholder="Description"></textarea>
      </div>
    );
  }
}

export default FormEducation;
