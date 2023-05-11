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
      <div id="resume-preview">
        <Header personal={personalInfo} />

        <section className="section">
          <h3>SUMMARY</h3>
          <Summary summary={summary} />
        </section>

        <section className="section">
          <h3>EXPERIENCE</h3>
          <Experience experienceList={this.props.experienceList} />
        </section>

        <section className="section">
          <h3>EDUCATION</h3>
          <Education educationList={this.props.educationList} />
        </section>
      </div>
    );
  }
}

export default Resume;
