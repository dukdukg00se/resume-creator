import React from 'react';
/* eslint-disable */

class ResumeExperience extends React.Component {
  render() {
    const { experience } = this.props;

    return (
      <section>
        <h3>Experience</h3>
        <div>
          <h4>{experience.position}</h4>
          <span>
            {experience.from} - {experience.to}
          </span>
        </div>
        <div>
          {experience.company}
          <span>{experience.location}</span>
        </div>
        <div>
          <p>{experience.responsibilities}</p>
        </div>
      </section>
    );
  }
}

export default ResumeExperience;
