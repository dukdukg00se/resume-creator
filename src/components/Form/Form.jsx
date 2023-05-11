import './Form.css';
import React from 'react';
import Personal from './components/FormPersonal';
import Experience from './components/FormExperience';
import Education from './components/FormEducation';
import { Add, Clear, Delete } from './components/Buttons';

class Form extends React.Component {
  render() {
    return (
      <form>
        <section>
          <h2>Personal Information</h2>
          <Personal
            onChange={this.props.onChange}
            personalInfo={this.props.personalInfo}
          />
          <div className="btn-container">
            <Clear onClick={this.props.onClick} />
          </div>
        </section>

        <section>
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

        <section>
          <h2>Education</h2>
          <Education
            onChange={this.props.onChange}
            educationList={this.props.educationList}
          />
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
