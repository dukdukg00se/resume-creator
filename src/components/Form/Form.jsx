import React from 'react';
import Personal from './components/FormPersonal';
import Experience from './components/FormExperience';
import Education from './components/FormEducation';
/* eslint-disable */

class Form extends React.Component {
  render() {
    // console.log(this.props.personalInfo);
    return (
      <form>
        <section>
          <h2>Personal Information</h2>
          <Personal
            onChange={this.props.onChange}
            personalInfo={this.props.personalInfo}
          />
        </section>
        <section>
          <h2>Experience</h2>
          <Experience onChange={this.props.onChange} />
        </section>
        <section>
          <h2>Education</h2>
          <Education />
        </section>
      </form>
    );
  }
}

export default Form;
