import React from 'react';
import Header from './components/ResumeHeader';
import Summary from './components/ResumeSummary';

/* eslint-disable */

class Resume extends React.Component {
  render() {
    // Get all info except summary from "personal" key
    const personalInfo = (({ name, title, address, phone, email }) => ({
      name,
      title,
      address,
      phone,
      email,
    }))(this.props.personal);
    const { summary } = this.props.personal;

    return (
      <div>
        <Header personal={personalInfo} />
        <Summary summary={summary} />
      </div>
    );
  }
}

export default Resume;
