import React from 'react';

class ResumeHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div>
          <h1>John Doe</h1>
          <h2>Software Developer</h2>
        </div>
        <div>
          <ul>
            <li>Phone</li>
            <li>Email</li>
            <li>Location</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default ResumeHeader;
