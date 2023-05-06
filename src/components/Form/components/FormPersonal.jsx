import React from 'react';

class FormPersonal extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div id="personal">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={this.props.personalInfo.name}
          onChange={this.props.onChange}
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={this.props.personalInfo.title}
          onChange={this.props.onChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          value={this.props.personalInfo.address}
          onChange={this.props.onChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={this.props.personalInfo.phone}
          onChange={this.props.onChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.props.personalInfo.email}
          onChange={this.props.onChange}
        />
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={this.props.personalInfo.summary}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default FormPersonal;
