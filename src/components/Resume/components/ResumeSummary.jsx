import React from 'react';

class ResumeSummary extends React.Component {
  render() {
    return (
      <section>
        <h3>Summary</h3>
        <p>{this.props.summary}</p>
      </section>
    );
  }
}

export default ResumeSummary;
