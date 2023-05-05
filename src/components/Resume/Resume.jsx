import React from 'react';
import Header from './components/ResumeHeader';
import Summary from './components/ResumeSummary';
import Experience from './components/ResumeExperience';
import Education from './components/ResumeEducation';
import './Resume.css';

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
        <Experience experience={this.props.experience} />
        <Education education={this.props.education} />
      </div>
    );
  }
}

export default Resume;
