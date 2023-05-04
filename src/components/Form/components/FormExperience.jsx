import React from 'react';

class FormExperience extends React.Component {
  render() {
    return (
      <div id="experience">
        <input
          name="position"
          type="text"
          placeholder="Position"
          // value={this.props.position}
          onChange={this.props.onChange}
        ></input>
        <input
          name="company"
          type="text"
          placeholder="Company"
          // value={this.props.company}
          onChange={this.props.onChange}
        ></input>
        <input
          name="city"
          type="text"
          placeholder="City"
          // value={this.props.city}
          onChange={this.props.onChange}
        ></input>
        <input
          name="from"
          type="text"
          placeholder="From"
          // value={this.props.from}
          onChange={this.props.onChange}
        ></input>
        <input
          name="to"
          type="text"
          placeholder="To"
          // value={this.props.to}
          onChange={this.props.onChange}
        ></input>
        <textarea
          name="responsibilities"
          placeholder="Responsibilities"
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}

export default FormExperience;
