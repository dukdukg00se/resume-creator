import React from 'react';
import Personal from './components/Personal';
import Experience from './components/Experience';
import Education from './components/Education';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <section>
          <h2>Personal Information</h2>
          <Personal />
        </section>
        <section>
          <h2>Experience</h2>
          <Experience />
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
