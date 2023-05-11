import React from 'react';
/* eslint-disable */

class ResumeExperience extends React.Component {
  render() {
    const { experienceList } = this.props;

    return (
      <div>
        {experienceList.map((experience) => {
          return (
            <div key={experience.id} id={experience.id} className="info">
              <div>
                <h4>{experience.position}</h4>
                <span>
                  {experience.from} - {experience.to}
                </span>
              </div>

              <div className="company-info">
                {experience.company}
                <span>{experience.location}</span>
              </div>

              <div>
                <p>{experience.responsibilities}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ResumeExperience;
