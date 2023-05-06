import React from 'react';

class ResumeEducation extends React.Component {
  render() {
    const { education } = this.props;

    return (
      <div>
        <div>
          {education.degree} • {education.major} • {education.university}
          <span>{education.graduated}</span>
        </div>
        <div>{education.description}</div>
      </div>
    );
  }
}

export default ResumeEducation;
