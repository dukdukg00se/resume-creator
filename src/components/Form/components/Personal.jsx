import React from 'react';

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" value={this.props.name} />
        <input type="text" placeholder="Title" value={this.props.title} />
        <input type="text" placeholder="Address" value={this.props.address} />
        <input type="text" placeholder="Phone" value={this.props.phone} />
        <input type="email" placeholder="Email" value={this.props.email} />
        <textarea
          placeholder="Professional Summary"
          value={this.props.summary}
        />
      </div>
    );
  }
}

export default Personal;
