import React from 'react';

class FormEducation extends React.Component {
  render() {
    return (
      <div id="education">
        <input
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={this.props.onChange}
          // value={this.props.degree}
        ></input>
        <input
          name="major"
          type="text"
          placeholder="Major"
          onChange={this.props.onChange}
          // value={this.props.major}
        ></input>
        <input
          name="university"
          type="text"
          placeholder="University"
          onChange={this.props.onChange}
          // value={this.props.university}
        ></input>

        <input
          name="graduated"
          type="text"
          placeholder="Graduated"
          onChange={this.props.onChange}
          // value={this.props.graduated}
        ></input>
        <textarea
          name="description"
          placeholder="Description"
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

export default FormEducation;
