import React from 'react';
import Personal from './components/FormPersonal';
import Experience from './components/FormExperience';
import Education from './components/FormEducation';
import { Add, Clear, Delete } from './components/Buttons';

/* eslint-disable */

class Form extends React.Component {
  render() {
    return (
      <form>
        <section id="personal">
          <h2>Personal Information</h2>
          <Personal
            onChange={this.props.onChange}
            personalInfo={this.props.personalInfo}
          />
          <div className="btn-container">
            <Clear onClick={this.props.onClick} />
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <Experience
            onChange={this.props.onChange}
            experienceList={this.props.experienceList}
          />

          <div className="btn-container">
            <Clear onClick={this.props.onClick} />
            <Delete onClick={this.props.onClick} />
            <Add onClick={this.props.onClick} />
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <Education onChange={this.props.onChange} />
          <div className="btn-container">
            <Clear onClick={this.props.onClick} />
            <Delete onClick={this.props.onClick} />
            <Add onClick={this.props.onClick} />
          </div>
        </section>
      </form>
    );
  }
}

export default Form;
