import React from 'react';

class ResumeEducation extends React.Component {
  render() {
    const { education } = this.props;

    return (
      <section>
        <h3>Education</h3>
        <div>
          {education.degree} • {education.major} • {education.university}
          <span>{education.graduated}</span>
        </div>
        <div>{education.description}</div>
      </section>
    );
  }
}

export default ResumeEducation;
